import React from 'react';
import { Heart } from 'lucide-react';
import NeonText from './NeonText.jsx';

const Footer = () => {
  return (
    <footer className="bg-muted text-muted-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Heart className="w-5 h-5 text-pink-400 fill-pink-400" />
            <NeonText color="pink" className="text-lg font-semibold">
              Celebrating friendship and amazing moments
            </NeonText>
            <Heart className="w-5 h-5 text-pink-400 fill-pink-400" />
          </div>
          
          <p className="text-sm max-w-md mx-auto">
            This special website is dedicated to Jay, an incredible friend who brings light and joy to everyone around her. Here's to many more years of friendship and celebration!
          </p>
          
          <p className="text-xs pt-4">
            Made with love for Jay's birthday celebration • {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;