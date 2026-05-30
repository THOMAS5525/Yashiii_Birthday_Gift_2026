import React from 'react';
import { motion } from 'framer-motion';
import NeonText from './NeonText';
import { Heart, Trophy, Sparkles } from 'lucide-react';

const GiftMessage = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
      className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none px-4"
    >
      <div className="bg-background/80 backdrop-blur-xl border border-border/50 p-8 md:p-12 rounded-3xl shadow-2xl max-w-2xl w-full text-center relative overflow-hidden pointer-events-auto">
        {/* Decorative background glows */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500" />
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />

        <div className="relative z-10 space-y-6">
          <div className="flex justify-center gap-3 mb-2">
            <Sparkles className="w-6 h-6 text-orange-400" />
            <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
            <Trophy className="w-6 h-6 text-purple-400" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold">
            <NeonText color="pink">Happy Belated Birthday, Jay!</NeonText>
          </h2>

          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              First off, I am so incredibly sorry this is late. You deserve the world on your special day, and I feel terrible for missing the exact date. But my appreciation for you is year-round.
            </p>
            <p>
              From that very first random squad match in Free Fire to becoming absolute best friends, every moment has been a blast. You're not just an amazing gaming buddy who clutches up when we need it most; you're a genuinely incredible person.
            </p>
            <p className="font-medium text-foreground">
              You're my MVP in Free Fire and in life. 🎮✨
            </p>
            <p>
              Here's to many more Booyahs, endless late-night laughs, and a year ahead filled with all the happiness, success, and joy you bring to others.
            </p>
          </div>

          <div className="pt-6 border-t border-border/50">
            <p className="text-xl font-semibold">
              <NeonText color="purple">With all my love & best wishes!</NeonText>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GiftMessage;