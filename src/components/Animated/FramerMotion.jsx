import { motion } from 'framer-motion';

export function HoverCard({ children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className="bg-white dark:bg-slate-800 rounded-2xl shadow p-4"
      role="group"
    >
      {children}
    </motion.div>
  );
}
