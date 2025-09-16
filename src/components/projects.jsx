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

  // ✅ Lock scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProject]);

  return (
    <PageWrapper>
      <div className="projects-page">
        <h1 className="projects-title">OUR PROJECTS</h1>
        <h2 className='projects-subtitle'>Explore Our different creations </h2>

        <div className="projects-slider-wrapper">
          <div className="projects-slider">
            <div className="slider-track">
              {projectsData.map((project, index) => {
                let cardClass = 'project-card';

                if (index === currentIndex) {
                  cardClass += ' active';
                } else if (index === currentIndex - 1) {
                  cardClass += ' prev';
                } else if (index === currentIndex + 1) {
                  cardClass += ' next';
                } else {
                  cardClass += ' hidden';
                }

                return (
                  <div
                    key={project.id}
                    className={cardClass}
                    onClick={() => setSelectedProject(project)}
                  >
                    <img src={project.cover} alt={project.title} />
                    <h3>{project.title}</h3>
                  </div>
                );
              })}
            </div>

            <div className="slider-controls">
              <button onClick={handlePrev} className="slider-btn">←</button>
              <button onClick={handleNext} className="slider-btn">→</button>
            </div>
          </div>
        </div>

        {/* ✅ Full-screen modal with backdrop */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </PageWrapper>
  );
}