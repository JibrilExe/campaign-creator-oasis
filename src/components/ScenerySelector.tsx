import React from 'react';

import { ExtraCampaignFormValues } from '@/lib/types';

interface ScenerySelectorProps {
    extraCampaignValues: ExtraCampaignFormValues;
    setExtraCampaignValues: (values: ExtraCampaignFormValues) => void;
}

const ScenerySelector: React.FC<ScenerySelectorProps> = ({ extraCampaignValues, setExtraCampaignValues }) => {
    return (
        <div className="space-y-2">
            <label htmlFor="scenery" className="block text-sm font-medium capitalize">
                Scenery
            </label>
            <select
                id="scenery"
                value={extraCampaignValues.scenery}
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
            <input
                id="customScenery"
                name="customScenery"
                placeholder="Or enter a custom scenery..."
                value={extraCampaignValues.scenery}
                onChange={(e) => setExtraCampaignValues({ ...extraCampaignValues, scenery: e.target.value })}
                className="form-input mt-2"
            />
        </div>
    );
};

export default ScenerySelector;