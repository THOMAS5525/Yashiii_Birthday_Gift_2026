import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

const ParticleEffect = ({ trigger }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (trigger) {
      // Generate random particles
      const newParticles = Array.from({ length: 24 }).map((_, i) => ({
        id: i,
        type: Math.random() > 0.5 ? 'heart' : 'sparkle',
        x: (Math.random() - 0.5) * 400, // Spread horizontally
        y: (Math.random() - 0.5) * 200 - 100, // Spread vertically, mostly upwards
        scale: Math.random() * 0.8 + 0.5,
        delay: Math.random() * 0.5,
        duration: Math.random() * 1.5 + 1.5,
        color: ['text-pink-400', 'text-purple-400', 'text-orange-400', 'text-yellow-400'][Math.floor(Math.random() * 4)]
      }));
      setParticles(newParticles);
    } else {
      setParticles([]);
    }
  }, [trigger]);

  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-40">
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0], 
              x: p.x, 
              y: p.y - 150, 
              scale: p.scale,
              rotate: p.type === 'heart' ? [-20, 20, -10] : [0, 180, 360]
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: p.duration, 
              delay: p.delay,
              ease: "easeOut"
            }}
            className={`absolute ${p.color}`}
          >
            {p.type === 'heart' ? (
              <Heart className="w-6 h-6 fill-current" />
            ) : (
              <Sparkles className="w-8 h-8" />
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ParticleEffect;