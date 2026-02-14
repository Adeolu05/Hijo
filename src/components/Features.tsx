import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Watch, Globe, Lock, CheckCircle } from 'lucide-react';

const Features: React.FC = () => {
  const offerings = [
    {
      icon: <Watch className="w-8 h-8 text-gold-400" />,
      title: "Authentic Luxury & Designer Watches",
      description: "A curated collection of the world's finest timepieces."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-gold-400" />,
      title: "Pre-owned & Brand-new",
      description: "Whether you seek a vintage gem or a modern marvel, we have it."
    },
    {
      icon: <Zap className="w-8 h-8 text-gold-400" />,
      title: "Trade-in & Resale Options",
      description: "Upgrade your collection with our competitive trade-in services."
    },
    {
      icon: <Globe className="w-8 h-8 text-gold-400" />,
      title: "Worldwide Shipping",
      description: "Secure, insured global delivery to your doorstep."
    },
    {
      icon: <Lock className="w-8 h-8 text-gold-400" />,
      title: "Secure Transactions",
      description: "Buyer protection and verified payment methods for peace of mind."
    }
  ];

  const reasons = [
    "Verified Authenticity Guarantee",
    "Transparent Pricing",
    "Reliable Customer Service",
    "Wide Selection of Rare Models"
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">What We Offer</h2>
          <div className="w-20 h-1 bg-gold-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {offerings.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
            >
              <div className="w-16 h-16 mx-auto bg-midnight-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-gold-400/50">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif text-white mb-3">{feature.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-midnight-900 rounded-2xl p-8 md:p-12 border border-white/5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-serif text-white mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                {reasons.map((reason, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/80">
                    <CheckCircle className="text-gold-400 w-5 h-5 flex-shrink-0" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden border border-gold-400/20 shadow-2xl shadow-black/50 group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-900/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              <img
                src="/image/hijo.jpg"
                alt="Luxury Watch Detail"
                className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;