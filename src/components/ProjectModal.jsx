import { motion, AnimatePresence } from 'framer-motion';
import './styles/projectModal.css';

export default function ProjectModal({ project, onClose }) {
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
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className="modal-images">
            {project.images.map((img, i) => (
              <img key={i} src={img} alt={`Detail ${i}`} />
            ))}
          </div>
          <button onClick={onClose}>Close</button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}