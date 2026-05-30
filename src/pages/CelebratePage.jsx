import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { PartyPopper, Gift, Cake, Music, Sparkles } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import NeonText from '@/components/NeonText.jsx';
import GlowButton from '@/components/GlowButton.jsx';
import ConfettiEffect from '@/components/ConfettiEffect.jsx';
import { toast } from 'sonner';

const CelebratePage = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [wishCount, setWishCount] = useState(0);
  
  useEffect(() => {
    setShowConfetti(true);
  }, []);
  
  const handleMakeWish = () => {
    setWishCount(prev => prev + 1);
    setShowConfetti(true);
    toast.success('Wish sent with love and sparkles');
    
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };
  
  const celebrationItems = [
    {
      icon: Gift,
      title: 'Unwrap joy',
      description: 'Every moment with you is a gift worth celebrating',
      color: 'purple'
    },
    {
      icon: Cake,
      title: 'Sweet memories',
      description: "Here's to creating more delicious moments together",
      color: 'pink'
    },
    {
      icon: Music,
      title: 'Dance through life',
      description: 'May your year be filled with rhythm and happiness',
      color: 'orange'
    },
    {
      icon: Sparkles,
      title: 'Shine bright',
      description: 'Keep spreading your light and positive energy',
      color: 'blue'
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>Celebrate Jay's Birthday! 🎉 | Interactive Celebration</title>
        <meta name="description" content="Join the birthday celebration for Jay with confetti, wishes, and festive vibes. Make a wish and spread the joy!" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        {showConfetti && <ConfettiEffect duration={5000} particleCount={60} />}
        
        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <PartyPopper className="w-12 h-12 text-pink-400 animate-float" />
                <PartyPopper className="w-10 h-10 text-purple-400 animate-float" style={{ animationDelay: '0.5s' }} />
                <PartyPopper className="w-12 h-12 text-orange-400 animate-float" style={{ animationDelay: '1s' }} />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <NeonText color="pink" animate>Let's celebrate!</NeonText>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                It's time to party and make this birthday celebration unforgettable
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <GlowButton 
                  color="pink" 
                  onClick={handleMakeWish}
                  className="text-lg px-10 py-6"
                >
                  Make a wish for Jay ✨
                </GlowButton>
                {wishCount > 0 && (
                  <p className="mt-4 text-sm text-muted-foreground">
                    {wishCount} {wishCount === 1 ? 'wish' : 'wishes'} sent with love
                  </p>
                )}
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-2xl p-12 mb-16 border border-border text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <NeonText color="purple">Birthday celebration vibes</NeonText>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                Today is all about celebrating you, Jay! Your friendship, your energy, and everything that makes you special. Let's make this a day to remember!
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-4xl">
                🎉 🎂 🎈 🎁 ✨ 🌟 💝 🎊
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <NeonText color="orange">Celebration highlights</NeonText>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {celebrationItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                      className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className={`w-16 h-16 rounded-xl bg-${item.color}-500/10 flex items-center justify-center mb-6`}>
                        <Icon className={`w-8 h-8 text-${item.color}-400`} />
                      </div>
                      <h3 className="text-2xl font-semibold mb-3 text-card-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-16 text-center bg-muted rounded-2xl p-12 border border-border"
            >
              <Sparkles className="w-16 h-16 text-purple-400 mx-auto mb-6 animate-float" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <NeonText color="pink">Keep celebrating</NeonText>
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
                Don't let the celebration end here! Every day is an opportunity to celebrate the amazing person you are. Keep shining, keep smiling, and keep being the incredible Jay we all know and love.
              </p>
              <GlowButton 
                color="purple" 
                onClick={handleMakeWish}
                className="text-base px-8 py-4"
              >
                Send another wish 🎊
              </GlowButton>
            </motion.div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default CelebratePage;