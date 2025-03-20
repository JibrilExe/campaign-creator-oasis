import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/lib/animations';
import Form from './BasicForm';
import StanceSelector from './StanceSelector';
import { handleSubmitInitial } from '@/hooks/helpers';
import { ImageOption, CampaignFormValues, ExtraCampaignFormValues, FeedbackFormValues } from '@/lib/types';

interface CombinedFormProps {
    logoOptions: any[];
    setFormStep: (step: number) => void;
    setOutputImages: (val: ImageOption[]) => void;
}

const CombinedForm: React.FC<CombinedFormProps> = ({
    logoOptions,
    setFormStep,
    setOutputImages
}) => {
    const [showLogos, setShowLogos] = useState(false);
    const [campaignValues, setCampaignValues] = useState<CampaignFormValues>({
      season: '',
      position: '',
      stance: '',
      extra_prompt: ''
    });
  
    const [extraCampaignValues, setExtraCampaignValues] = useState<ExtraCampaignFormValues>({
      color: '',
      scenery: ''
    });
  
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setCampaignValues(prev => ({ ...prev, [name]: value }));
    };

    const toggleShowLogos = () => {
        setShowLogos(!showLogos);
      };

    return (
        <form onSubmit={(e) => handleSubmitInitial({ e, campaignValues, extraCampaignValues, setFormStep, setOutputImages })} className="space-y-6">
            <Form 
                campaignValues={campaignValues} 
                extraCampaignValues={extraCampaignValues} 
                setCampaignValues={setCampaignValues} 
                setExtraCampaignValues={setExtraCampaignValues} 
                handleChangeInput={handleChangeInput} 
            />

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

            <StanceSelector 
                logoOptions={logoOptions} 
                showLogos={showLogos} 
                campaignValues={campaignValues} 
                setCampaignValues={setCampaignValues} 
            />
            
            <FadeIn delay={0.4}>
                <Button type="submit" className="w-full btn-primary">
                    Submit Campaign Details
                </Button>
            </FadeIn>
        </form>
    );
};

export default CombinedForm;