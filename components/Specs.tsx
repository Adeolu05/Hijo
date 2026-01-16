import React from 'react';
import { motion } from 'framer-motion';

const Specs: React.FC = () => {
  return (
    <section id="specs" className="py-24 bg-midnight-800 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
             <div className="absolute inset-0 bg-gold-400/10 blur-3xl rounded-full"></div>
             <img 
                src="/image/Exotic.png" 
                alt="Watch Close Up"
                className="relative z-10 w-full rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
             />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-white mb-6">Technical Excellence</h2>
            <p className="text-white/60 mb-10 leading-relaxed">
              Every timepiece is a result of hundreds of hours of design and engineering. We refuse to compromise on materials or movement.
            </p>

            <ul className="space-y-6">
              <li className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-white/50 font-medium">Case Diameter</span>
                <span className="text-white font-serif">42mm</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-white/50 font-medium">Water Resistance</span>
                <span className="text-white font-serif">5 ATM (50 Meters)</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-white/50 font-medium">Strap Material</span>
                <span className="text-white font-serif">Genuine Italian Leather</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-white/50 font-medium">Glass</span>
                <span className="text-white font-serif">Sapphire Crystal</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-white/50 font-medium">Warranty</span>
                <span className="text-white font-serif">2-Year International</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Specs;