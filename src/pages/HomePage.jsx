import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Gift, Camera, MessageCircle, PartyPopper } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import NeonText from '@/components/NeonText.jsx';
import GlowButton from '@/components/GlowButton.jsx';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const features = [
    {
      icon: Gift,
      title: 'About Jay',
      description: 'Discover what makes Jay such an incredible friend',
      link: '/about',
      color: 'purple'
    },
    {
      icon: Camera,
      title: 'Gallery',
      description: 'Explore beautiful memories captured together',
      link: '/gallery',
      color: 'pink'
    },
    {
      icon: MessageCircle,
      title: 'Birthday Message',
      description: 'A heartfelt message just for you',
      link: '/message',
      color: 'orange'
    },
    {
      icon: PartyPopper,
      title: 'Celebrate',
      description: 'Join the celebration with confetti and wishes',
      link: '/celebrate',
      color: 'blue'
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>Happy Birthday Jay! 🎉✨ - Best Friends Adventure</title>
        <meta name="description" content="A special birthday celebration website dedicated to Jay, an amazing friend. Explore memories, messages, and join the celebration!" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(https://horizons-cdn.hostinger.com/b04aa437-1c96-4ea5-9f23-105d07c42b24/ae56793d91156a9985b8eb19606c5e9c.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-pink-400 animate-float" />
                <Sparkles className="w-6 h-6 text-purple-400 animate-float" style={{ animationDelay: '0.5s' }} />
                <Sparkles className="w-10 h-10 text-orange-400 animate-float" style={{ animationDelay: '1s' }} />
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <NeonText color="purple" animate className="block">
                  Happy Birthday
                </NeonText>
                <NeonText color="pink" animate className="block mt-2" style={{ animationDelay: '0.3s' }}>
                  Jay! 🎉✨
                </NeonText>
              </h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed"
              >
                Welcome to a special celebration dedicated to an extraordinary friend. 
                Explore memories, heartfelt messages, and join in the birthday festivities!
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
              >
                <Link to="/celebrate">
                  <GlowButton color="pink" className="text-lg px-8 py-6">
                    Start Celebrating 🎊
                  </GlowButton>
                </Link>
                <Link to="/about">
                  <GlowButton color="purple" className="text-lg px-8 py-6">
                    About Jay
                  </GlowButton>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        <section className="py-24 bg-gradient-to-b from-background to-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <NeonText color="orange">Explore the celebration</NeonText>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dive into different sections to discover memories, messages, and more
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link to={feature.link}>
                      <div className="bg-card rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border group h-full flex flex-col">
                        <div className={`w-16 h-16 rounded-xl bg-${feature.color}-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`w-8 h-8 text-${feature.color}-400`} />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3 text-card-foreground">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed flex-grow">
                          {feature.description}
                        </p>
                        <div className="mt-6">
                          <span className={`text-${feature.color}-400 font-medium group-hover:underline`}>
                            Explore →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default HomePage;