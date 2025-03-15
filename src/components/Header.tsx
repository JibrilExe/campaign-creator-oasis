
import React from 'react';
import { motion } from 'framer-motion';
import { SlideUp } from '@/lib/animations';

interface HeaderProps {
  title: string;
  subtitle?: string;
  logoSrc?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, logoSrc }) => {
  return (
    <header className="mb-8 pt-8">
      <SlideUp delay={0.1}>
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-2">{title}</h1>
          {subtitle && <p className="text-lg md:text-xl text-muted-foreground">{subtitle}</p>}
        </div>
      </SlideUp>
      
      {logoSrc && (
        <motion.div 
          className="flex justify-center mt-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
        >
          <motion.img 
            src={logoSrc} 
            alt="Logo" 
            className="w-40 md:w-56 object-contain"
            animate={{ y: [0, -10, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 3, 
              ease: "easeInOut" 
            }}
          />
        </motion.div>
      )}
    </header>
  );
};

export default Header;
