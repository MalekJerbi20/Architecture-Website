import { useState, useEffect } from 'react';
import ProjectModal from './ProjectModal';
import projectsData from './projectsData';
import './styles/projects.css';
import PageWrapper from './PageWrapper';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < projectsData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'auto';
  }, [selectedProject]);

  return (
    <div className="projects-page">
      <div className="project-fullscreen-wrapper">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className={`project-fullscreen ${index === currentIndex ? 'visible' : 'hidden'}`}
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.cover} alt={project.title} className="fullscreen-image" />
            <div className="project-overlay">
              <h2>{project.title}</h2>
              <p>{project.category}</p>
              <button className="start-btn">Start a Project</button>
            </div>
          </div>
        ))}
      </div>

      <div className="slider-controls">
        <button onClick={handlePrev} className="slider-btn">←</button>
        <button onClick={handleNext} className="slider-btn">→</button>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}