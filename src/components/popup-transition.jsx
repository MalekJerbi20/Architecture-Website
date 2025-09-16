import { motion } from 'framer-motion';
export default function PopupTransition({ children, onClose }) {
    return (
<motion.div
  className="modal-content"
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.95 }}
  transition={{ duration: 0.3 }}
>
</motion.div>
)
};