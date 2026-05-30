import React from 'react';

const NeonText = ({ 
  children, 
  color = 'purple', 
  className = '', 
  animate = false,
  as = 'span'
}) => {
  const Component = as;
  
  const glowClasses = {
    purple: 'neon-glow-purple text-purple-400',
    pink: 'neon-glow-pink text-pink-400',
    orange: 'neon-glow-orange text-orange-400',
    blue: 'neon-glow-blue text-blue-400'
  };
  
  const animationClass = animate ? 'animate-neon-pulse' : '';
  
  return (
    <Component className={`${glowClasses[color]} ${animationClass} ${className}`}>
      {children}
    </Component>
  );
};

export default NeonText;