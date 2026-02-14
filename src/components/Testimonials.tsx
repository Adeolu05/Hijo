import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-midnight-800 border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
        >
            <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-gold-400 fill-gold-400 mx-1" />
                ))}
            </div>
            <h2 className="text-3xl font-serif text-white mb-2">Trusted by Collectors</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <Quote className="absolute top-0 left-0 text-white/5 w-24 h-24 -translate-x-8 -translate-y-8" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-midnight-900/50 backdrop-blur-md p-10 md:p-14 rounded-2xl border border-white/5"
          >
            <p className="text-xl md:text-3xl font-serif text-white/90 italic leading-relaxed mb-8">
              "The craftsmanship is incredible. I've received more compliments on this watch than my pieces that cost 5x as much. It truly feels like a work of art on my wrist."
            </p>
            
            <div className="flex items-center justify-center gap-4">
               <div className="w-12 h-12 rounded-full bg-gray-600 overflow-hidden">
                 <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-full h-full object-cover" />
               </div>
               <div className="text-left">
                 <div className="text-white font-bold">Alexander J.</div>
                 <div className="text-gold-400 text-xs uppercase tracking-widest">Verified Buyer</div>
               </div>
            </div>
          </motion.div>
        </div>

        {/* As Seen In */}
        <div className="mt-20 pt-10 border-t border-white/5">
            <p className="text-white/30 text-xs uppercase tracking-widest mb-8">As Seen In</p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-30 grayscale">
                {/* Placeholder logos using text for simplicity but styled as logos */}
                <span className="font-serif text-2xl font-bold">VOGUE</span>
                <span className="font-sans text-2xl font-black tracking-tighter">GQ</span>
                <span className="font-serif text-2xl italic">Esquire</span>
                <span className="font-mono text-2xl font-bold">HODINKEE</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;