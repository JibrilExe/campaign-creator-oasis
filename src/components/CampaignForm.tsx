
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from '@/lib/animations';
import { ImageOption, CampaignFormValues, ExtraCampaignFormValues, FeedbackFormValues } from '@/lib/types';
import ImageGrid from './ImageGrid';
import FeedbackForm from './FeedbackForm';
import { toast } from 'sonner';
import { AnimatePresence, motion } from 'framer-motion';

interface CampaignFormProps {
  logoOptions: ImageOption[];
  designOptions: ImageOption[];
  finalOptions: ImageOption[];
}

const CampaignForm: React.FC<CampaignFormProps> = ({ 
  logoOptions, 
  designOptions, 
  finalOptions 
}) => {
  const [showLogos, setShowLogos] = useState(false);
  const [campaignValues, setCampaignValues] = useState<CampaignFormValues>({
    season: '',
    position: '',
    stance: '',
    image: ''
    });

  const [extraCampaignValues, setExtraCampaignValues] = useState<ExtraCampaignFormValues>({
    color: '',
    scenery: ''
  });
  
  const [formStep, setFormStep] = useState(0);
  const [firstFeedback, setFirstFeedback] = useState<FeedbackFormValues>({
    image: '',
    feedback: ''
  });
  const [secondFeedback, setSecondFeedback] = useState<FeedbackFormValues>({
    image: '',
    feedback: ''
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCampaignValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitInitial = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate at least environment and position are filled
  
    setFormStep(1);
    toast.success('Initial campaign details submitted successfully!');
  };

  const handleFirstFeedbackSubmit = (values: FeedbackFormValues) => {
    setFirstFeedback(values);
    setFormStep(2);
    toast.success('First feedback submitted!');
  };

  const handleSecondFeedbackSubmit = (values: FeedbackFormValues) => {
    setSecondFeedback(values);
    setFormStep(3);
    toast.success('Final feedback submitted! Your campaign is complete.');
  };

  const toggleShowLogos = () => {
    setShowLogos(!showLogos);
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
              
              <form onSubmit={handleSubmitInitial} className="space-y-6">
                <StaggerContainer>
                  {Object.keys(campaignValues).map((field) => (
                    <StaggerItem key={field}>
                      <div className="space-y-2">
                        <label htmlFor={field} className="block text-sm font-medium capitalize">
                          {field}
                        </label>
                        <Input
                          id={field}
                          name={field}
                          placeholder={`Enter campaign ${field}...`}
                          value={campaignValues[field as keyof CampaignFormValues] as string}
                          onChange={handleChangeInput}
                          className="form-input"
                        />
                      </div>
                    </StaggerItem>
                  ))}
                  <StaggerItem key="color">
                    <div className="space-y-2">
                      <label htmlFor="color" className="block text-sm font-medium capitalize">
                        Color
                      </label>
                      <select
                        id="color"
                        name="color"
                        value={extraCampaignValues.color}
                        onChange={(e) => setExtraCampaignValues({ ...extraCampaignValues, color: e.target.value })}
                        className="form-select"
                      >
                        <option value="">Select a color...</option>
                        <option value="#FF5733">Red</option>
                        <option value="#33FF57">Green</option>
                        <option value="#3357FF">Blue</option>
                        <option value="#F3FF33">Yellow</option>
                      </select>
                      <Input
                        id="customColor"
                        name="customColor"
                        placeholder="Or enter a custom hex color..."
                        value={extraCampaignValues.color}
                        onChange={(e) => setExtraCampaignValues({ ...extraCampaignValues, color: e.target.value })}
                        className="form-input mt-2"
                      />
                    </div>
                  </StaggerItem>
                  <StaggerItem key="scenery">
                    <div className="space-y-2">
                      <label htmlFor="color" className="block text-sm font-medium capitalize">
                        Scenery
                      </label>
                      <select
                        id="scenery"
                        name="scenery"
                        value={extraCampaignValues.color}
                        onChange={(e) => setExtraCampaignValues({ ...extraCampaignValues, scenery: e.target.value })}
                        className="form-select"
                      >
                        <option value="">Select a scenery...</option>
                        <option value="University">University</option>
                        <option value="Space">Space</option>
                        <option value="Business">Business</option>
                        <option value="Playground">Playground</option>
                        <option value="Spring">Spring</option>
                        <option value="Christmass">Christmass</option>
                        <option value="Office">Office</option>
                      </select>
                      <Input
                        id="customScenery"
                        name="customScenery"
                        placeholder="Or enter a custom scenery..."
                        value={extraCampaignValues.scenery}
                        onChange={(e) => setExtraCampaignValues({ ...extraCampaignValues, scenery: e.target.value })}
                        className="form-input mt-2"
                      />
                    </div>
                  </StaggerItem>
                </StaggerContainer>

                <FadeIn delay={0.3}>
                  <Button 
                    type="button"
                    variant="outline" 
                    onClick={toggleShowLogos}
                    className="w-full mb-4"
                  >
                    {showLogos ? "Hide Optional Stances" : "Show Optional Stances"}
                  </Button>
                </FadeIn>

                <AnimatePresence>
                  {showLogos && (
                    <FadeIn delay={0.1}>
                      <div className="mt-4">
                        <ImageGrid
                          images={logoOptions}
                          selectedImage={campaignValues.image}
                          onSelect={(imageId) => setCampaignValues({ ...campaignValues, image: imageId })}
                        />
                      </div>
                    </FadeIn>
                  )}
                </AnimatePresence>
                
                <FadeIn delay={0.4}>
                  <Button type="submit" onClick={handleSubmitInitial} className="w-full btn-primary">
                    Submit Campaign Details
                  </Button>
                </FadeIn>
              </form>
            </div>
          </motion.div>
        )}

        {formStep === 1 && (
          <FeedbackForm
            key="first-feedback"
            images={designOptions.slice(0, 2)}
            onSubmit={handleFirstFeedbackSubmit}
            title="Select Your Preferred Design"
          />
        )}

        {formStep === 2 && (
          <FeedbackForm
            key="second-feedback"
            images={finalOptions.slice(0, 4)}
            onSubmit={handleSecondFeedbackSubmit}
            title="Select Your Final Design"
          />
        )}

        {formStep === 3 && (
          <motion.div
            key="completion"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel rounded-2xl p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
              className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6"
            >
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </motion.div>
            
            <h2 className="text-2xl font-display font-semibold mb-3">Campaign Creation Complete!</h2>
            <p className="text-muted-foreground mb-6">Your campaign designs have been submitted and are being processed.</p>
            
            <Button 
              onClick={() => setFormStep(0)} 
              className="btn-primary mx-auto"
            >
              Create Another Campaign
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CampaignForm;
