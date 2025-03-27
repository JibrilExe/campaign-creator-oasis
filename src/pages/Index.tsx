
import React from 'react';
import { motion } from 'framer-motion';
import CampaignForm from '@/components/CampaignForm';
import Header from '@/components/Header';
import { PageTransition } from '@/lib/animations';
import { ImageOption } from '@/lib/types';

const Index = () => {
  // This would normally come from your API or import
  // For now, we'll use placeholder images
  const logoOptions: ImageOption[] = Array.from({ length: 9 }, (_, i) => ({
    id: `mask-${i + 1}`,
    src: `./masks/mask${i + 1}.png`,
    alt: `Logo Option ${i + 1}`
  }));
  
  const designOptions: ImageOption[] = Array.from({ length: 8 }, (_, i) => ({
    id: `design-${i + 1}`,
    src: `./outputs/output${i + 1}.png`,
    alt: `Design Option ${i + 1}`
  }));

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
        <div className="container px-4 py-8 mx-auto">
          <Header 
            title="Campaign Creator" 
            subtitle="Design your perfect marketing campaign"
            logoSrc="./heylogo.png"
          />
          <p>If you use extra_prompt, other fields will be ignored and you get to try your own prompting skills, to refer the finetuned stances, click on the optional stances button below and select one, the unique id that you can use to refer it will be displayed in the stance field.</p>
          <CampaignForm
            logoOptions={logoOptions}
            designOptions={designOptions}
          />
          
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center text-sm text-muted-foreground mt-12"
          >
          </motion.footer>
        </div>
      </div>
    </PageTransition>
  );
};

export default Index;
