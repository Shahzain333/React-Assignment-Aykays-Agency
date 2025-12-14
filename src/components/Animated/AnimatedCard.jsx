import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedCard({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ 
        type: 'spring',
        stiffness: 300,
        damping: 20,
        delay: delay * 0.1
      }}
      viewport={{ once: true, margin: '-50px' }}
      className={`card ${className}`}
    >
      {children}
    </motion.div>
  );
}

<nav className='flex items-center justify-center gap-3 bg-red-400 pt-7'>
      <img width={40} src={LogoUrl} alt='Logo'/>
      <h1 className='text-2xl font-semibold'>Mybindle</h1>
    </nav>