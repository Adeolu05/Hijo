import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collection', path: '/collection' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <Link to="/" className="inline-block font-serif text-2xl font-bold tracking-tighter text-white">
              HIJO LUXWATCHES<span className="text-gold-400">.</span>
            </Link>
            <p className="text-white/50 leading-relaxed max-w-md">
              HIJO LUXWATCHES MULTI SERVICES. Trusted dealers in authentic luxury, vintage, and modern timepieces. Sourcing excellence for discerning collectors.
            </p>
            <div className="flex gap-6 pt-2">
              <a
                href="https://www.instagram.com/hijo_luxwatches"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-gold-400 transition-colors flex items-center gap-2 group"
              >
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">@hijo_luxwatches</span>
              </a>
            </div>
          </div>

          <div className="md:justify-self-end">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Explore</h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {currentYear} HIJO LUXWATCHES MULTI SERVICES. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-white/5 hover:bg-gold-400 hover:text-black transition-colors border border-white/10"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;