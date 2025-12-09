import { useState, useEffect } from 'react';
import Navbar from './navbar';
import ProjectModal from './ProjectModal';
import './styles/projects.css';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch projects
  useEffect(() => {
    fetch('http://localhost:3001/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error('Error fetching projects:', err));
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length); // Infinite loop
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length); // Infinite loop
  };

  // Helper to format number as 01, 02...
  const formatNumber = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <>
      <Navbar />
      <div className="projects-page">
        
        <div className="project-fullscreen-wrapper">
          {projects.map((project, index) => (
            <div
              key={project._id}
              className={`project-fullscreen ${index === currentIndex ? 'visible' : 'hidden'}`}
            >
              
              {/* 1. Giant Background Number */}
              <div className="giant-number">
                {formatNumber(index + 1)}
              </div>

              {/* 2. Image (Clickable) */}
              {project.images && (
                <img
                  src={`http://localhost:3001/uploads/${project.images[0]}`}
                  alt={project.title}
                  className="fullscreen-image"
                  onClick={() => setSelectedProject(project)}
                />
              )}

              {/* 3. Text Overlay (Overlapping) */}
              <div className="project-overlay">
                <span className="project-category">
                  {project.category || 'Architecture'}
                </span>
                
                <h2 
                  className="project-title"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.title}
                </h2>

                {/* Show a short teaser of description if available */}
                <p className="project-excerpt">
                  {project.description 
                    ? project.description 
                    : "Exploring the boundaries between nature and structure, this project represents our commitment to timeless design."}
                </p>
                
                <button 
                  className="start-btn" 
                  onClick={() => setSelectedProject(project)}
                >
                  Explore Project
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* 4. Controls */}
        <div className="slider-controls">
          <button onClick={handlePrev} className="slider-btn">←</button>
          <button onClick={handleNext} className="slider-btn">→</button>
        </div>

        {/* 5. Modal for Full Details */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </>
  );
}