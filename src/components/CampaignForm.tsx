
import React, { useState } from 'react';
import { ImageOption, FeedbackFormValues } from '@/lib/types';
import FeedbackForm from './FeedbackForm';
import { toast } from 'sonner';
import { AnimatePresence, motion } from 'framer-motion';
import CombinedForm from './CombinedForm';

interface CampaignFormProps {
  logoOptions: ImageOption[];
  designOptions: ImageOption[];
}

const CampaignForm: React.FC<CampaignFormProps> = ({ 
  logoOptions, 
  designOptions, 
}) => {
  const [formStep, setFormStep] = useState(0);
  const [firstFeedback, setFirstFeedback] = useState<FeedbackFormValues>({
    image: '',
    feedback: ''
  });

  const [outputImages, setOutputImages] = useState<ImageOption[]>([]);

  const handleFirstFeedbackSubmit = (values: FeedbackFormValues) => {
    setFirstFeedback(values);
    setFormStep(2);
    toast.success('First feedback submitted!');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 pb-16">
      <AnimatePresence mode="wait">
        {formStep === 0 && (
          <motion.div
            key="campaign-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="glass-panel rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-display font-semibold mb-6">Describe Your Campaign</h2>
              
              <CombinedForm setFormStep={setFormStep} logoOptions={logoOptions} setOutputImages={setOutputImages} />
            </div>
          </motion.div>
        )}

        {formStep === 1 && (
          <FeedbackForm
            key="first-feedback"
            images={outputImages}
            onSubmit={handleFirstFeedbackSubmit}
            title="Feedback o clock"
          />
        )}

      </AnimatePresence>
    </div>
  );
};

export default CampaignForm;
