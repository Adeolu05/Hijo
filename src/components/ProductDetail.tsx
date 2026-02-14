// import React from 'react'; // Removed unused import
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Shield, Clock, Ruler } from 'lucide-react';
import Button from './ui/Button';
import { Product } from '../data/products';

interface ProductDetailProps {
  product: Product | null;
  onBack: () => void;
}

const ProductDetail = ({ product, onBack }: ProductDetailProps) => {
  if (!product) return null;

  return (
    <div className="min-h-screen pt-28 pb-20 bg-midnight-900 flex flex-col">
      <div className="container mx-auto px-6 flex-grow flex flex-col justify-center">

        <button
          onClick={onBack}
          className="w-fit flex items-center gap-2 text-white/50 hover:text-gold-400 mb-12 transition-colors uppercase tracking-widest text-xs group"
        >
          <div className="p-2 border border-white/10 rounded-full group-hover:border-gold-400 transition-colors">
            <ArrowLeft size={14} />
          </div>
          Back to Collection
        </button>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-gold-400/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="aspect-[3/4] rounded-sm overflow-hidden border border-white/10 relative shadow-2xl shadow-black/50">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-900/40 via-transparent to-transparent"></div>
            </div>

            {/* Decorative decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r border-b border-gold-400/30 hidden lg:block"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 border-l border-t border-white/10 hidden lg:block"></div>
          </motion.div>

          {/* Details Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col h-full justify-center"
          >
            <div className="mb-2">
              <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gold-400 text-[10px] font-bold tracking-[0.2em] uppercase">
                {product.category} Series
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 leading-tight">
              {product.name}
            </h1>

            <p className="text-white/70 text-lg leading-relaxed mb-10 font-light">
              {product.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="p-5 bg-white/5 rounded-sm border border-white/5 hover:border-gold-400/30 transition-colors group">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="text-gold-400 group-hover:scale-110 transition-transform" size={18} />
                  <h4 className="text-white/40 text-xs font-bold uppercase tracking-wider">Material</h4>
                </div>
                <p className="text-white font-serif text-lg">{product.details.material}</p>
              </div>

              <div className="p-5 bg-white/5 rounded-sm border border-white/5 hover:border-gold-400/30 transition-colors group">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="text-gold-400 group-hover:scale-110 transition-transform" size={18} />
                  <h4 className="text-white/40 text-xs font-bold uppercase tracking-wider">Movement</h4>
                </div>
                <p className="text-white font-serif text-lg">{product.details.movement}</p>
              </div>

              <div className="p-5 bg-white/5 rounded-sm border border-white/5 hover:border-gold-400/30 transition-colors group">
                <div className="flex items-center gap-3 mb-2">
                  <Check className="text-gold-400 group-hover:scale-110 transition-transform" size={18} />
                  <h4 className="text-white/40 text-xs font-bold uppercase tracking-wider">Resistance</h4>
                </div>
                <p className="text-white font-serif text-lg">{product.details.resistance}</p>
              </div>

              <div className="p-5 bg-white/5 rounded-sm border border-white/5 hover:border-gold-400/30 transition-colors group">
                <div className="flex items-center gap-3 mb-2">
                  <Ruler className="text-gold-400 group-hover:scale-110 transition-transform" size={18} />
                  <h4 className="text-white/40 text-xs font-bold uppercase tracking-wider">Diameter</h4>
                </div>
                <p className="text-white font-serif text-lg">{product.details.diameter}</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 border-t border-white/10 pt-8">
              <Button className="w-full md:w-auto min-w-[200px]" onClick={() => alert("Thank you for your interest. Our concierge will contact you shortly.")}>
                Enquire for Price
              </Button>
              <div className="text-white/40 text-xs leading-relaxed max-w-xs text-center md:text-left">
                Includes Certificate of Authenticity & 5-Year Global Warranty
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;