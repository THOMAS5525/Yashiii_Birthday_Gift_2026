import React, { useEffect, useState } from 'react';

const ConfettiEffect = ({ duration = 5000, particleCount = 50 }) => {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    const colors = ['#A78BFA', '#F472B6', '#FB923C', '#60A5FA', '#34D399'];
    const shapes = ['circle', 'square', 'triangle'];
    
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
      size: 8 + Math.random() * 8
    }));
    
    setParticles(newParticles);
    
    const timer = setTimeout(() => {
      setParticles([]);
    }, duration);
    
    return () => clearTimeout(timer);
  }, [duration, particleCount]);
  
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="confetti-particle"
          style={{
            left: `${particle.left}%`,
            backgroundColor: particle.color,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            borderRadius: particle.shape === 'circle' ? '50%' : '0',
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`
          }}
        />
      ))}
    </div>
  );
};

export default ConfettiEffect;