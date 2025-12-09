import { useState } from 'react';

function AdminPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    link: ''
  });
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile)); // generate preview URL
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('link', formData.link);
    if (file) data.append('images', file);

    try {
      const res = await fetch('http://localhost:3001/api/projects', {
        method: 'POST',
        body: data, // FormData handles headers automatically
      });

      if (res.ok) {
        alert(' Project added successfully!');
        setFormData({ title: '', description: '', link: '' });
        setFile(null);
        setPreview(null);
      } else {
        alert(' Failed to add project');
      }
    } catch (err) {
      console.error(err);
      alert(' Error connecting to backend');
    }
  };

  return (
    <div style={{
      backgroundColor: '#000',
      color: '#fff',
      minHeight: '100vh',
      padding: '40px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Admin: Add New Project</h2>
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '500px',
        margin: '0 auto',
        gap: '20px'
      }}>
        <input
          name="title"
          placeholder="Project Title"
          value={formData.title}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="file" multiple 
          onChange={handleFileChange}
          style={inputStyle}
        />
        {preview && (
          <div>
            <p>Image Preview:</p>
            <img
              src={preview}
              alt="Preview"
              style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '6px' }}
            />
          </div>
        )}
        <input
          name="link"
          placeholder="Project Link"
          value={formData.link}
          onChange={handleChange}
          style={inputStyle}
        />
        <button type="submit" style={{
          padding: '12px',
          backgroundColor: '#fff',
          color: '#000',
          border: 'none',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>Add Project</button>
      </form>
    </div>
  );
}

const inputStyle = {
  padding: '12px',
  border: '1px solid #555',
  backgroundColor: '#111',
  color: '#fff',
  fontSize: '16px'
};

export default AdminPage;