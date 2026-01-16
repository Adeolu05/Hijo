import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyle = "px-8 py-3.5 relative overflow-hidden font-sans text-xs font-bold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-gold-400 text-black hover:bg-gold-500 border border-gold-400",
    secondary: "bg-white/5 backdrop-blur-md text-white border border-white/10 hover:bg-white/10 hover:border-white/30",
    outline: "border border-gold-400/50 text-gold-400 hover:bg-gold-400 hover:text-black"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;