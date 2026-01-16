import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Product } from '../App';

interface ShowcaseProps {
  onProductSelect: (product: Product) => void;
}

const Showcase: React.FC<ShowcaseProps> = ({ onProductSelect }) => {
  const products: Product[] = [
    {
      id: 1,
      name: "Hijo Royal Gold",
      image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=1000&auto=format&fit=crop",
      category: "Classic Series",
      description: "An embodiment of opulence. The Royal Gold features a 24k gold plated case.",
      details: { material: "18k Gold Plated", movement: "Swiss ETA 2824", resistance: "10 ATM", diameter: "41mm" }
    },
    {
      id: 2,
      name: "Hijo Smart Vision",
      image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1000&auto=format&fit=crop",
      category: "Modern Tech",
      description: "The future on your wrist. Seamlessly connect to your digital life.",
      details: { material: "Aerospace Aluminum", movement: "HJS-Chipset", resistance: "IP68", diameter: "44mm" }
    },
    {
      id: 3,
      name: "Hijo Vogue Rose",
      image: "/image/Vogue.png",
      category: "Minimalist",
      description: "Minimalist elegance for the modern trendsetter.",
      details: { material: "Rose Gold PVD", movement: "Miyota Quartz", resistance: "3 ATM", diameter: "38mm" }
    },
    {
      id: 5,
      name: "Hijo Midnight Elite",
      image: "/image/Elite.png",
      category: "Chronograph",
      description: "Darkness redefined. A matte black finish coupled with luminous hands.",
      details: { material: "Black PVD Steel", movement: "Auto Chrono", resistance: "10 ATM", diameter: "42mm" }
    }
  ];

  return (
    <section id="collection" className="py-24 bg-midnight-900">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex justify-between items-end"
        >
          <div>
            <span className="text-gold-400 font-bold tracking-widest uppercase text-xs">Our Collection</span>
            <h2 className="text-4xl font-serif text-white mt-2">Timeless Masterpieces</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-gold-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider">
            View All <ArrowRight size={16} />
          </button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onProductSelect(product)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-midnight-800 mb-6">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white uppercase tracking-widest text-sm border-b border-gold-400 pb-1">View Details</span>
                </div>
              </div>
              
              <div className="text-center group-hover:-translate-y-2 transition-transform duration-300">
                <p className="text-white/50 text-xs uppercase tracking-widest mb-2">{product.category}</p>
                <h3 className="text-xl font-serif text-white mb-2 group-hover:text-gold-400 transition-colors">{product.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;