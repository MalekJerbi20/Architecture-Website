import { motion, AnimatePresence } from 'framer-motion';
import './styles/projectModal.css';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-content"
          initial={{ y: 50, opacity: 0 }} // Slight slide up effect looks more premium
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          
          {/* --- LEFT SIDE: Image Gallery --- */}
          <div className="modal-gallery-section">
            {project.images && project.images.map((img, i) => (
              <div className="modal-image-wrapper" key={i}>
                <img
                  src={`http://localhost:3001/uploads/${img}`}
                  alt={`${project.title} detail ${i + 1}`}
                />
              </div>
            ))}
            
            {/* Fallback if no images */}
            {(!project.images || project.images.length === 0) && (
                 <div style={{padding:'40px', color:'#555'}}>No images available.</div>
            )}
          </div>

          {/* --- RIGHT SIDE: Project Info --- */}
          <div className="modal-info-section">
             {/* Close Button (Square) */}
             <button onClick={onClose} className="close-btn">✕</button>

             {/* Dynamic Content */}
             <span className="modal-category">
                {project.category || "Architecture"}
             </span>
             
             <h2>{project.title}</h2>
             
             <div className="modal-divider"></div>

             <p>{project.description}</p>

             {/* Optional project link */}
             {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Full Project →
                </a>
             )}
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}