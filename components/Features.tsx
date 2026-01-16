import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Watch } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-gold-400" />,
      title: "Premium Materials",
      description: "Crafted with scratch-resistant sapphire glass and 316L stainless steel for enduring durability."
    },
    {
      icon: <Zap className="w-8 h-8 text-gold-400" />,
      title: "Precision Movement",
      description: "Equipped with Japanese Quartz & Swiss Automatic movements for unparalleled accuracy."
    },
    {
      icon: <Watch className="w-8 h-8 text-gold-400" />,
      title: "Versatile Design",
      description: "From the boardroom to the weekend—meticulously designed to elevate every occasion."
    }
  ];

  return (
    <section id="features" className="py-24 bg-midnight-800">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Why Choose Hijo?</h2>
          <div className="w-20 h-1 bg-gold-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto bg-midnight-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-gold-400/50">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif text-white mb-4">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;