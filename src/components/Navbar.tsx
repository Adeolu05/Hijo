import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Revised Links for Professional Routing:
  const revisedLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collection', path: '/collection' },
    { name: 'Contact', path: '/contact' },
  ];


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-midnight-900/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="font-serif text-xl md:text-2xl font-bold tracking-tighter text-white z-50 truncate max-w-[200px] md:max-w-none"
        >
          HIJO LUXWATCHES<span className="text-gold-400">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {revisedLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-xs uppercase font-medium tracking-widest text-white/70 hover:text-gold-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 bg-midnight-900 pt-24 px-6 z-40"
          >
            <div className="flex flex-col space-y-6">
              {revisedLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-serif text-white hover:text-gold-400 text-left"
                >
                  {link.name}
                </Link>
              ))}
              <Button className="mt-8" onClick={() => { setIsOpen(false); navigate('/collection'); }}>Shop Now</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;