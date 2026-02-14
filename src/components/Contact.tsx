import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, AlertCircle, Instagram } from 'lucide-react';
import Button from './ui/Button';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });

    // Clear error as user types
    if (name in errors) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formState.name.trim()) {
      newErrors.name = 'Please enter your full name';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formState.email.trim()) {
      newErrors.email = 'Email address is required';
      isValid = false;
    } else if (!emailRegex.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formState.message.trim()) {
      newErrors.message = 'Please enter your message or inquiry';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Create mailto link for direct emailing
      const { name, email, subject, message } = formState;
      const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
      window.location.href = `mailto:hijoluxwatches@gmail.com?subject=${encodeURIComponent(subject || 'Inquiry from Website')}&body=${body}`;

      setFormState({ name: '', email: '', subject: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-gold-400" />,
      title: "Official Email",
      value: "hijoluxwatches@gmail.com",
      link: "mailto:hijoluxwatches@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5 text-gold-400" />,
      title: "Phone",
      value: "+234 813 063 4066, +971 52 232 6519",
      link: "tel:+2348130634066"
    },
    {
      icon: <MapPin className="w-5 h-5 text-gold-400" />,
      title: "Location",
      value: "Lagos / Nigeria",
      link: "#"
    },
    {
      icon: (
        <div className="flex gap-2">
          <Instagram className="w-5 h-5 text-gold-400" />
        </div>
      ),
      title: "Instagram",
      value: "@hijoluxwatches",
      link: "https://instagram.com/hijoluxwatches"
    }
  ];

  const getInputClass = (error?: string) => {
    return `w-full bg-white/5 border rounded-sm px-4 py-3 text-white focus:outline-none transition-colors placeholder-white/20 ${error
      ? 'border-red-500/50 focus:border-red-500'
      : 'border-white/10 focus:border-gold-400/50'
      }`;
  };

  return (
    <section id="contact" className="py-24 bg-midnight-800 border-t border-white/5 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold-400 font-bold tracking-widest uppercase text-xs mb-4 block">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Begin Your <span className="italic text-white/50">Legacy</span>
            </h2>
            <p className="text-white/60 mb-12 leading-relaxed text-lg font-light max-w-md">
              Looking for a specific model or interested in a trade-in? Our network grants us access to the world's most sought-after timepieces.
            </p>

            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-6 group">
                  <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-gold-400/50 transition-colors backdrop-blur-md">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white/40 text-xs font-bold uppercase tracking-wider mb-1">{item.title}</h4>
                    <a href={item.link} className="text-white font-serif text-lg hover:text-gold-400 transition-colors">
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-midnight-900/80 backdrop-blur-xl p-8 md:p-10 rounded-sm border border-white/10 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-white/40">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className={getInputClass(errors.name)}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs flex items-center gap-1"
                    >
                      <AlertCircle size={12} /> {errors.name}
                    </motion.p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-white/40">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className={getInputClass(errors.email)}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs flex items-center gap-1"
                    >
                      <AlertCircle size={12} /> {errors.email}
                    </motion.p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs uppercase tracking-widest text-white/40">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-400/50 transition-colors placeholder-white/20"
                  placeholder="Sourcing Request / Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-white/40">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className={`${getInputClass(errors.message)} resize-none`}
                  placeholder="Tell us about the timepiece you desire..."
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-xs flex items-center gap-1"
                  >
                    <AlertCircle size={12} /> {errors.message}
                  </motion.p>
                )}
              </div>

              <Button type="submit" className="w-full flex justify-center items-center gap-2">
                Send Request <Send size={16} />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;