import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import GiftBox from '@/components/GiftBox.jsx';
import ParticleEffect from '@/components/ParticleEffect.jsx';
import GiftMessage from '@/components/GiftMessage.jsx';
import ConfettiEffect from '@/components/ConfettiEffect.jsx';
import NeonText from '@/components/NeonText.jsx';

const GiftPage = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [boxRemoved, setBoxRemoved] = useState(false);

  const handleOpenGift = () => {
    setIsOpened(true);
  };

  const handleBoxAnimationComplete = () => {
    setBoxRemoved(true);
  };

  return (
    <>
      <Helmet>
        <title>A Special Gift for Jay | Birthday Celebration</title>
        <meta name="description" content="A special interactive birthday gift and heartfelt message for Jay." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
        {/* Magical Sunset Background */}
        <div className="absolute inset-0 bg-sunset-gradient pointer-events-none" />
        
        {/* Ambient floating particles in background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          {Array.from({ length: 15 }).map((_, i) => (
            <div 
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                opacity: Math.random() * 0.5 + 0.2
              }}
            />
          ))}
        </div>

        <Header />
        
        <main className="flex-grow flex flex-col items-center justify-center relative pt-20 pb-12 px-4">
          
          <AnimatePresence>
            {!isOpened && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-32 text-center z-10"
              >
                <h1 className="text-2xl md:text-3xl font-medium">
                  <NeonText color="orange" animate>Click to open your gift</NeonText>
                </h1>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative w-full max-w-4xl flex items-center justify-center min-h-[500px]">
            {!boxRemoved && (
              <GiftBox 
                isOpened={isOpened} 
                onOpen={handleOpenGift} 
                onAnimationComplete={handleBoxAnimationComplete}
              />
            )}
            
            <ParticleEffect trigger={isOpened} />
            <GiftMessage isVisible={boxRemoved} />
          </div>

          {isOpened && <ConfettiEffect duration={6000} particleCount={100} />}
          
        </main>
        
        <div className="relative z-50">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default GiftPage;