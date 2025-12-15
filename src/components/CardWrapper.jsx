import React from 'react';
import { motion } from 'framer-motion';

export default function CardWrapper({ 
    children,
    className = '',
    padding = true,
    shadow = true,
    rounded = true,
    border = false,
    hover = false,
    delay = 0,
    onClick,
    ...props
 }) {

    const baseClasses = `
        ${padding ? 'p-4 md:p-6' : ''}
        ${shadow ? 'shadow-lg shadow-gray-200 dark:shadow-gray-800' : ''}
        ${rounded ? 'rounded-xl' : ''}
        ${border ? 'border border-gray-200 dark:border-gray-700' : ''}
        ${hover ? 'hover:shadow-xl dark:hover:shadow-gray-900 transition-all duration-300' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: delay * 0.1 }}
      viewport={{ once: true }}
      whileHover={hover ? { scale: 1.02, y: -4 } : {}}
      className={`${baseClasses} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  );
}