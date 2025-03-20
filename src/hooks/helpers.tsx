import { CampaignFormValues, ExtraCampaignFormValues, ImageOption } from '@/lib/types';
import React from 'react';
import { toast } from 'sonner';

interface HandleSubmitInitialProps {
    e: React.FormEvent;
    campaignValues: CampaignFormValues;
    extraCampaignValues: ExtraCampaignFormValues;
    setFormStep: (val: number) => void;
    setOutputImages: (val: ImageOption[]) => void;
}

const handleSubmitInitial = async ({ e, campaignValues, extraCampaignValues, setFormStep, setOutputImages }: HandleSubmitInitialProps) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:5000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...campaignValues, ...extraCampaignValues }),
            credentials: 'include'
        });

        if (!response.ok) {
            console.log("whoops");
            throw new Error('Network response was not ok');
        }

        setOutputImages(
            [
                {
                    id: '1',
                    src: './uploads/output1.png',
                    alt: 'Output Image 1'
                },
                {
                    id: '2',
                    src: './uploads/output2.png',
                    alt: 'Output Image 2'
                }
            ]
        )

        setFormStep(1);
        toast.success('Initial campaign details submitted successfully!');
    } catch (error) {
        toast.error('Failed to submit campaign details');
    }
};


export {
    handleSubmitInitial,
};