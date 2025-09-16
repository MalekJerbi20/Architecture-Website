import { motion, AnimatePresence } from 'framer-motion';
export default function SliderTransition({ children, currentProjectIndex }) {
  return (
<AnimatePresence mode="wait">
  <motion.div
    key={currentProjectIndex}
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.4 }}
    className="project-card"
  >
    <img src={project.cover} alt={project.title} />
    <h3>{project.title}</h3>
  </motion.div>
</AnimatePresence>
    );
    }