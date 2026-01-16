import { useState, useEffect } from 'react';
import Navbar from './navbar';
import './styles/admin.css';

function AdminPage() {
  // --- STATE MANAGEMENT ---
  const [projects, setProjects] = useState([]); // Store fetched projects
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    link: ''
  });
  
  // File handling
  const [files, setFiles] = useState([]); 
  const [previews, setPreviews] = useState([]); 

  // Edit Mode States
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [existingImages, setExistingImages] = useState([]); // Images currently on server

  // --- 1. FETCH PROJECTS ON LOAD ---
  useEffect(() => {
    fetchProjects();
  }, []);

  // Cleanup preview URLs to avoid memory leaks
  useEffect(() => {
    return () => {
      previews.forEach(url => URL.revokeObjectURL(url));
    };
  }, [previews]);

  const fetchProjects = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/projects');
      const data = await res.json();
      setProjects(data);
    } catch (err) {
      console.error("Error fetching projects:", err);
    }
  };

  // --- HANDLERS ---
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(selectedFiles);
      const newPreviews = selectedFiles.map(file => URL.createObjectURL(file));
      setPreviews(newPreviews);
    }
  };

  // --- 2. DELETE FUNCTIONALITY ---
  const handleDelete = async (id) => {
    // Confirmation dialog
    if (window.confirm("⚠️ Are you sure? This will permanently delete the project.")) {
      try {
        const res = await fetch(`http://localhost:3001/api/projects/${id}`, {
          method: 'DELETE',
        });
        
        if (res.ok) {
          alert("Project deleted.");
          fetchProjects(); // Refresh the list
        } else {
          alert("Failed to delete project.");
        }
      } catch (err) {
        console.error("Delete error:", err);
      }
    }
  };

  // --- 3. EDIT START FUNCTIONALITY ---
  const handleEdit = (project) => {
    setIsEditing(true);
    setCurrentId(project._id);
    
    // Fill form with current data
    setFormData({
      title: project.title,
      description: project.description,
      link: project.link || ''
    });

    // Show existing images so user knows what's there
    setExistingImages(project.images || []);
    
    // Clear any new file selections (user hasn't picked new ones yet)
    setFiles([]);
    setPreviews([]);

    // Smooth scroll to top to show form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- CANCEL EDIT ---
  const handleCancelEdit = () => {
    setIsEditing(false);
    setCurrentId(null);
    setFormData({ title: '', description: '', link: '' });
    setFiles([]);
    setPreviews([]);
    setExistingImages([]);
  };

  // --- 4. SUBMIT (CREATE OR UPDATE) ---
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('link', formData.link);

    // Append new files (if any)
    files.forEach((file) => {
      data.append('images', file);
    });

    try {
      let url = 'http://localhost:3001/api/projects';
      let method = 'POST';

      // If Editing, switch URL and Method
      if (isEditing) {
        url = `http://localhost:3001/api/projects/${currentId}`;
        method = 'PUT';
      }

      const res = await fetch(url, {
        method: method,
        body: data,
      });

      if (res.ok) {
        alert(isEditing ? '✓ Project Updated!' : '✓ Project Created!');
        handleCancelEdit(); // Reset everything
        fetchProjects();    // Refresh list
      } else {
        alert('✕ Operation failed');
      }
    } catch (err) {
      console.error(err);
      alert('Error connecting to backend');
    }
  };

  return (
    <>
      <Navbar />
      <div className="admin-container">
        
        {/* === FORM CARD === */}
        <div className="admin-card">
          <div className="admin-header">
            <h2 className="admin-title">Dashboard</h2>
            <span className="admin-subtitle">
              {isEditing ? `Editing: ${formData.title}` : 'Add New Project'}
            </span>
          </div>

          <form onSubmit={handleSubmit} className="admin-form">
            
            <div className="form-group">
              <label>Project Title</label>
              <input
                name="title"
                placeholder="e.g. The Glass House"
                value={formData.title}
                onChange={handleChange}
                className="admin-input"
                required
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                placeholder="Project details..."
                value={formData.description}
                onChange={handleChange}
                className="admin-textarea"
                required
              />
            </div>

            {/* Image Upload */}
            <div className="form-group">
              <label>{isEditing ? 'Upload New Images (Optional)' : 'Project Images'}</label>
              <div className="file-upload-wrapper">
                <input
                  type="file"
                  multiple 
                  onChange={handleFileChange}
                  className="file-input"
                  accept="image/*"
                />
              </div>
            </div>

            {/* SECTION A: Newly Selected Images Preview */}
            {previews.length > 0 && (
              <div className="preview-container">
                <span className="preview-label">NEW UPLOADS ({previews.length})</span>
                <div className="preview-grid">
                  {previews.map((src, index) => (
                    <img key={index} src={src} alt={`New ${index}`} className="preview-image" />
                  ))}
                </div>
              </div>
            )}

            {/* SECTION B: Existing Server Images (Only shown when Editing & No new files selected) */}
            {isEditing && previews.length === 0 && existingImages.length > 0 && (
              <div className="preview-container">
                <span className="preview-label">CURRENT SAVED IMAGES</span>
                <div className="preview-grid">
                  {existingImages.map((img, index) => (
                    <img 
                      key={index} 
                      // Ensure this path matches your backend structure
                      src={`http://localhost:3001/uploads/${img}`} 
                      alt={`Existing ${index}`} 
                      className="preview-image" 
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="form-group">
              <label>External Link (Optional)</label>
              <input
                name="link"
                placeholder="https://..."
                value={formData.link}
                onChange={handleChange}
                className="admin-input"
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="admin-btn">
              {isEditing ? 'Update Project' : 'Publish Project'}
            </button>

            {/* Cancel Edit Button */}
            {isEditing && (
              <button 
                type="button" 
                onClick={handleCancelEdit} 
                className="cancel-btn"
              >
                Cancel Edit
              </button>
            )}

          </form>
        </div>

        {/* === INVENTORY LIST SECTION === */}
        <div className="inventory-section">
          <div className="inventory-header">
            <span>Project Inventory</span>
            <span style={{fontSize: '0.9rem', color: '#D4AF37'}}>{projects.length} Total</span>
          </div>

          <div className="inventory-grid">
            {projects.map((project) => (
              <div key={project._id} className="inventory-card">
                
                {/* Thumbnail Logic */}
                {project.images && project.images.length > 0 ? (
                  <img 
                    src={`http://localhost:3001/uploads/${project.images[0]}`} 
                    alt={project.title} 
                    className="inv-image" 
                  />
                ) : (
                  <div className="inv-image" style={{display:'flex', alignItems:'center', justifyContent:'center', background:'#222', color:'#666'}}>
                    No Image
                  </div>
                )}

                <h3 className="inv-title">{project.title}</h3>
                <p className="inv-desc">{project.description}</p>

                <div className="inv-actions">
                  <button onClick={() => handleEdit(project)} className="action-btn edit-btn">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(project._id)} className="action-btn delete-btn">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}

export default AdminPage;