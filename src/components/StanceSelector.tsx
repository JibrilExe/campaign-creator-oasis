import React, { Component } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FadeIn } from '@/lib/animations';
import ImageGrid from './ImageGrid';
import { ImageOption, CampaignFormValues } from '@/lib/types';

interface StanceSelectorProps {
    showLogos: boolean;
    logoOptions: ImageOption[];
    campaignValues: CampaignFormValues;
    setCampaignValues: (values: CampaignFormValues) => void;
}

const stanceTagMapping: Record<string, string> = {
    "mask-1": "S1SA",
    "mask-2": "K43P",
    "mask-3": "P3M2",
    "mask-4": "W21G",
    "mask-5": "KYR4",
    "mask-6": "T1UP",
    "mask-7": "H0I2",
    "mask-8": "L7YU",
    "mask-9": "F12G",
};

const reverseStanceTagMapping = Object.fromEntries(
    Object.entries(stanceTagMapping).map(([key, value]) => [value, key])
);

class StanceSelector extends Component<StanceSelectorProps> {
    render() {
        const { showLogos, logoOptions, campaignValues, setCampaignValues } = this.props;

        return (
            <AnimatePresence>
                {showLogos && (
                    <FadeIn delay={0.1}>
                        <div className="mt-4">
                            <ImageGrid
                                images={logoOptions}
                                selectedImage={reverseStanceTagMapping[campaignValues.stance] || ""}
                                onSelect={(imageId) => setCampaignValues({ ...campaignValues, stance: stanceTagMapping[imageId] })}
                            />
                        </div>
                    </FadeIn>
                )}
            </AnimatePresence>
        );
    }
}

export default StanceSelector;