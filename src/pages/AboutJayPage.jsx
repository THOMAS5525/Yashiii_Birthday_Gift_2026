import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, Crosshair, Headphones as Headset, Trophy, Heart } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import NeonText from '@/components/NeonText.jsx';

const AboutJayPage = () => {
  const qualities = [
    {
      icon: Shield,
      title: 'The Ultimate Teammate',
      description: 'Jay always has my back. Whether it is dropping extra medkits or providing cover fire, she never leaves a squadmate behind.',
      color: 'pink'
    },
    {
      icon: Crosshair,
      title: 'Clutch Master',
      description: 'When the safe zone is shrinking and it is a 1v4 situation, Jay stays cool and pulls off the impossible Booyah.',
      color: 'purple'
    },
    {
      icon: Headset,
      title: 'Best Comms',
      description: 'Our late-night voice chats are filled with chaotic callouts, endless laughter, and the absolute best gaming vibes.',
      color: 'orange'
    },
    {
      icon: Trophy,
      title: 'GG Spirit',
      description: 'Win or lose, playing with Jay is always the highlight of the day. She brings positivity to every single match.',
      color: 'blue'
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>About Jay - The Ultimate Duo | Birthday Celebration</title>
        <meta name="description" content="Celebrating Jay - an incredible Free Fire duo partner and best friend with a heart of gold and unmatched gaming skills." />
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <NeonText color="pink" animate>About Jay</NeonText>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From random squadmates to absolute best friends
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-card rounded-2xl p-8 md:p-12 mb-12 border border-border"
            >
              <div className="prose prose-lg max-w-none text-card-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  It all started with a random match in Free Fire. We dropped into Bermuda, survived the chaos, 
                  and quickly realized we made the perfect duo. What began as just teaming up for ranked matches 
                  turned into hours of late-night gaming sessions, hilarious squad moments, and an unbreakable bond.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Jay isn't just an amazing player with great strategy and aim; she's the kind of friend who makes 
                  every lobby fun. Whether we are securing an epic Booyah or laughing at our own terrible driving 
                  skills in-game, she brings a unique blend of warmth, humor, and genuine care to every interaction.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Over time, our friendship leveled up beyond the game. She's the friend who remembers the little things, 
                  celebrates the big moments, and supports me through real-life challenges just as fiercely as she does 
                  in a firefight. The world is genuinely a better place with Jay in it, and I'm incredibly grateful to 
                  call her my best friend.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <NeonText color="purple">What makes Jay amazing</NeonText>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {qualities.map((quality, index) => {
                  const Icon = quality.icon;
                  return (
                    <motion.div
                      key={quality.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      className="bg-muted rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300"
                    >
                      <div className={`w-12 h-12 rounded-lg bg-${quality.color}-500/10 flex items-center justify-center mb-4`}>
                        <Icon className={`w-6 h-6 text-${quality.color}-400`} />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">
                        {quality.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {quality.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16 text-center bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-2xl p-12 border border-border"
            >
              <Heart className="w-16 h-16 text-pink-400 fill-pink-400 mx-auto mb-6 animate-float" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <NeonText color="pink">Here's to you, Jay!</NeonText>
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Thank you for being such an incredible duo partner and an even better friend. Your kindness, energy, 
                and genuine spirit make every day brighter. Here's to celebrating you today and securing many more 
                victories together!
              </p>
            </motion.div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default AboutJayPage;