import React from 'react';

export default function ImageWrapper({ src, alt, width, height, className = '' }) {
  // Use native lazy loading + srcSet for responsive images
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      className={`block h-auto ${className}`}
      // add srcSet/webp fallbacks as built in pipeline
    />
  );
}
