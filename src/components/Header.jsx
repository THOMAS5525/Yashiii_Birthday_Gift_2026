import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, Gift } from 'lucide-react';
import NeonText from './NeonText';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Jay' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/message', label: 'Birthday Message' },
    { path: '/celebrate', label: 'Celebrate' },
    { path: '/gift', label: 'Special Gift', icon: Gift, highlight: true }
  ];
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <Sparkles className="w-6 h-6 text-pink-400 group-hover:text-pink-300 transition-colors duration-200" />
            <NeonText color="pink" className="text-xl font-bold">
              Jay the yashiii✨
            </NeonText>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-200 relative flex items-center gap-1.5 ${
                  link.highlight 
                    ? 'text-orange-400 hover:text-orange-300 neon-glow-orange' 
                    : isActive(link.path)
                      ? 'text-purple-400 neon-glow-purple'
                      : 'text-foreground/80 hover:text-purple-400'
                }`}
              >
                {link.icon && <link.icon className="w-4 h-4" />}
                {link.label}
                {isActive(link.path) && !link.highlight && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-400 box-glow-purple" />
                )}
              </Link>
            ))}
          </nav>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground p-2 hover:bg-muted rounded-lg transition-all duration-200 active:scale-[0.98]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium transition-all duration-200 py-2 flex items-center gap-2 ${
                  link.highlight
                    ? 'text-orange-400 neon-glow-orange'
                    : isActive(link.path)
                      ? 'text-purple-400 neon-glow-purple'
                      : 'text-foreground/80 hover:text-purple-400'
                }`}
              >
                {link.icon && <link.icon className="w-4 h-4" />}
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;