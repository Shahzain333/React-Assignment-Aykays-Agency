import React from 'react'

export default function CardWrapper({ 
    children,
    className = '',
    padding = true,
    shadow = true,
    rounded = true,
    border = false,
    hover = false,
    onClick,
    ...props
 }) {

    const baseClasses = `
        ${padding ? 'p-4 md:p-6' : ''}
        ${shadow ? 'shadow-lg' : ''}
        ${rounded ? 'rounded-xl' : ''}
        ${border ? 'border border-gray-200' : ''}
        ${hover ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        bg-white `;

  return (
    <div 
      className={`${baseClasses} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  )
}


