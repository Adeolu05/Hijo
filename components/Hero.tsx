import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onExplore?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-midnight-900">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 text-center lg:text-left"
        >
          <div className="inline-block px-4 py-1.5 border border-white/10 rounded-full bg-white/5 backdrop-blur-md">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gold-400">Purveyors of Fine Horology</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight">
            <span className="block text-white">Curated Luxury.</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-white/60">
              Global Excellence.
            </span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl font-light max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Your premier destination for the world's most sought-after timepieces. We source, verify, and deliver excellence to your wrist.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button onClick={onExplore}>Shop Collection</Button>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
           {/* Decorative circle behind watch */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] border border-white/5 rounded-full border-dashed"
          />
          <motion.div 
             animate={{ rotate: -360 }}
             transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
             className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-white/5 rounded-full"
          />

          <motion.img
            src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1000&auto=format&fit=crop"
            alt="Flagship Watch"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;