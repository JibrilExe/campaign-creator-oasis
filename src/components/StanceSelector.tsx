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
                                selectedImage={campaignValues.stance}
                                onSelect={(imageId) => setCampaignValues({ ...campaignValues, stance: imageId })}
                            />
                        </div>
                    </FadeIn>
                )}
            </AnimatePresence>
        );
    }
}

export default StanceSelector;