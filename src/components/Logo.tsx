
import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  src: string;
  alt?: string;
  className?: string;
  onClick?: () => void;
  isSelected?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  src, 
  alt = "Logo", 
  className = "", 
  onClick, 
  isSelected = false 
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative overflow-hidden rounded-xl ${className} ${
        isSelected 
          ? "ring-4 ring-primary ring-offset-2 shadow-lg" 
          : "ring-2 ring-transparent hover:ring-primary/30"
      }`}
    >
      <motion.img
        initial={{ filter: "blur(10px)", opacity: 0 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.3 }}
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-all duration-300"
      />
      
      {isSelected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-primary/10 backdrop-blur-sm flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-white/90 backdrop-blur-md text-primary font-medium rounded-full px-4 py-2 shadow-md"
          >
            Selected
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Logo;
