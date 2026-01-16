import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const navLinks = [
    { name: 'Collection', id: 'collection' },
    { name: 'Our Story', id: 'features' },
    { name: 'Craftsmanship', id: 'specs' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-midnight-900 border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        {/* Main Footer Content - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          
          {/* Brand & Socials */}
          <div className="space-y-6">
             <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' })}} className="font-serif text-2xl font-bold tracking-tighter text-white">
              HIJO<span className="text-gold-400">.</span>
            </a>
            <p className="text-white/50 leading-relaxed max-w-md">
              Hijo Multiservices Timepieces. Your trusted partner in luxury horology. Curating, verifying, and delivering the finest brands to discerning collectors worldwide.
            </p>
            <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-gold-400 hover:text-black transition-all">
                    <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-gold-400 hover:text-black transition-all">
                    <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-gold-400 hover:text-black transition-all">
                    <Facebook size={18} />
                </a>
            </div>
          </div>

          {/* Navigation Links - Centered/Aligned for balance */}
          <div className="md:justify-self-end">
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-white/60">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-gold-400 cursor-pointer transition-colors text-left uppercase tracking-wider text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-white/30 text-sm">
            <p className="text-center md:text-left">&copy; 2026 Hijo Multiservices. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;