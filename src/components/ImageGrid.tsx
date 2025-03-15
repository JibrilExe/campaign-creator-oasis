
import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import { StaggerContainer, StaggerItem } from '@/lib/animations';
import { ImageOption } from '@/lib/types';

interface ImageGridProps {
  images: ImageOption[];
  selectedImage: string;
  onSelect: (imageId: string) => void;
  columns?: number;
}

const ImageGrid: React.FC<ImageGridProps> = ({ 
  images, 
  selectedImage, 
  onSelect,
  columns = 3
}) => {
  return (
    <StaggerContainer className={`grid grid-cols-2 md:grid-cols-${columns} gap-4`}>
      {images.map((image, index) => (
        <StaggerItem key={image.id}>
          <Logo
            src={image.src}
            alt={image.alt}
            isSelected={selectedImage === image.id}
            onClick={() => onSelect(image.id)}
            className="aspect-square"
          />
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
};

export default ImageGrid;
