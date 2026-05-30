import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import NeonText from '@/components/NeonText.jsx';
import ImageCarousel from '@/components/ImageCarousel.jsx';

const GalleryPage = () => {
  const images = [
    {
      url: 'https://horizons-cdn.hostinger.com/b04aa437-1c96-4ea5-9f23-105d07c42b24/ae56793d91156a9985b8eb19606c5e9c.png',
      alt: 'Beautiful sunset moment with vibrant colors'
    },
    {
      url: 'https://horizons-cdn.hostinger.com/b04aa437-1c96-4ea5-9f23-105d07c42b24/03b5e0f52ca0abe80cb2780557ff405d.png',
      alt: 'Cherished memory captured in time'
    },
    {
      url: 'https://horizons-cdn.hostinger.com/b04aa437-1c96-4ea5-9f23-105d07c42b24/c8bf0841edbe3049ff72e909e21bd726.png',
      alt: 'Special moment of friendship and joy'
    },
    {
      url: 'https://horizons-cdn.hostinger.com/b04aa437-1c96-4ea5-9f23-105d07c42b24/9693db3c50ddf6ae62057a43d331ec6d.png',
      alt: 'Unforgettable adventure together'
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>Gallery - Cherished Memories | Jay's Birthday Celebration</title>
        <meta name="description" content="Explore a collection of beautiful memories and special moments captured together. A visual celebration of friendship and joy." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Camera className="w-10 h-10 text-purple-400" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <NeonText color="purple" animate>Memory Gallery</NeonText>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A collection of beautiful moments and cherished memories that capture the essence of our friendship
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <ImageCarousel images={images} />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-square overflow-hidden rounded-xl bg-muted border border-border hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm font-medium">
                      Memory {index + 1}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 text-center bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-2xl p-12 border border-border"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <NeonText color="pink">More memories to come</NeonText>
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Every moment with you is worth capturing. Here's to creating countless more beautiful memories together in the years ahead!
              </p>
            </motion.div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default GalleryPage;