import React from 'react';
import { Button } from '@/components/ui/button';

const GlowButton = ({ 
  children, 
  color = 'purple', 
  onClick,
  className = '',
  ...props 
}) => {
  const colorClasses = {
    purple: 'bg-purple-600 hover:bg-purple-700 text-white box-glow-purple hover:box-glow-purple',
    pink: 'bg-pink-600 hover:bg-pink-700 text-white box-glow-pink hover:box-glow-pink',
    orange: 'bg-orange-600 hover:bg-orange-700 text-white box-glow-orange hover:box-glow-orange',
    blue: 'bg-blue-600 hover:bg-blue-700 text-white'
  };
  
  return (
    <Button
      onClick={onClick}
      className={`${colorClasses[color]} transition-all duration-300 active:scale-[0.98] font-semibold ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default GlowButton;