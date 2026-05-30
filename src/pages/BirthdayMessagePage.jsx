import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MessageCircle, Heart, Sparkles } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import NeonText from '@/components/NeonText.jsx';

const BirthdayMessagePage = () => {
  return (
    <>
      <Helmet>
        <title>Birthday Message for Jay | Heartfelt Wishes</title>
        <meta name="description" content="A heartfelt birthday message for Jay, celebrating friendship, expressing gratitude, and wishing for an amazing year ahead." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="pt-32 pb-20 bg-gradient-to-b from-background via-muted/30 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <MessageCircle className="w-10 h-10 text-pink-400" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <NeonText color="pink" animate>A message for you</NeonText>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From the heart, with love and appreciation
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-card rounded-2xl p-8 md:p-12 mb-12 border border-border shadow-lg"
            >
              <div className="space-y-6 text-lg leading-relaxed text-card-foreground">
                <div className="flex items-start gap-4">
                  <Sparkles className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <p>
                    Dear Jay,
                  </p>
                </div>
                
                <p>
                  First and foremost, I need to apologize for this belated birthday wish. I know your special 
                  day has passed, but please know that you've been in my thoughts. Sometimes life gets hectic, 
                  but that's no excuse for missing the chance to celebrate someone as wonderful as you on their 
                  actual birthday.
                </p>
                
                <p>
                  Even though this message comes late, the feelings behind it are as genuine and heartfelt as 
                  they would have been on your birthday. You deserve to be celebrated not just on one day, but 
                  every single day for the incredible person you are.
                </p>
                
                <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-xl p-6 my-8 border border-border">
                  <p className="text-center font-semibold text-xl">
                    <NeonText color="pink">
                      Your friendship means the world to me
                    </NeonText>
                  </p>
                </div>
                
                <p>
                  Having you as a friend has been one of the greatest blessings in my life. You bring so much 
                  joy, laughter, and positivity into every situation. Your kindness, your energy, and your 
                  genuine care for the people around you make you truly one of a kind.
                </p>
                
                <p>
                  I'm grateful for every moment we've shared — from the spontaneous adventures to the quiet 
                  conversations, from the belly laughs to the supportive shoulder you've always offered. You 
                  have this amazing ability to make people feel seen, heard, and valued, and I'm so lucky to 
                  experience that firsthand.
                </p>
                
                <div className="flex items-start gap-4">
                  <Heart className="w-6 h-6 text-pink-400 fill-pink-400 flex-shrink-0 mt-1" />
                  <p>
                    As you step into this new year of your life, I wish you nothing but happiness, success, 
                    and countless beautiful moments. May this year bring you closer to your dreams, surround 
                    you with love, and fill your days with the same joy you bring to others.
                  </p>
                </div>
                
                <p>
                  Thank you for being such an amazing friend. Thank you for your patience, your understanding, 
                  and your unwavering support. Here's to celebrating you — not just today, but always.
                </p>
                
                <div className="pt-6 text-center">
                  <p className="text-2xl font-semibold">
                    <NeonText color="purple">
                      Happy Birthday, Jay! 🎉✨
                    </NeonText>
                  </p>
                  <p className="mt-4 text-muted-foreground">
                    With love and appreciation, always
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="bg-muted rounded-xl p-6 text-center border border-border">
                <div className="text-4xl mb-3">🎂</div>
                <h3 className="font-semibold mb-2 text-foreground">Another year wiser</h3>
                <p className="text-sm text-muted-foreground">
                  May this year bring growth and new experiences
                </p>
              </div>
              
              <div className="bg-muted rounded-xl p-6 text-center border border-border">
                <div className="text-4xl mb-3">🌟</div>
                <h3 className="font-semibold mb-2 text-foreground">Shine bright</h3>
                <p className="text-sm text-muted-foreground">
                  Keep being the amazing person you are
                </p>
              </div>
              
              <div className="bg-muted rounded-xl p-6 text-center border border-border">
                <div className="text-4xl mb-3">💝</div>
                <h3 className="font-semibold mb-2 text-foreground">Cherished friendship</h3>
                <p className="text-sm text-muted-foreground">
                  Grateful for every moment we share
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default BirthdayMessagePage;