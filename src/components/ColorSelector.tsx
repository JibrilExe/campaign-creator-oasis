import { StaggerItem } from '@/lib/animations';
import React from 'react';
import { Input } from './ui/input';
import { ExtraCampaignFormValues } from '@/lib/types';

interface ColorSelectorProps {
    extraCampaignValues: ExtraCampaignFormValues;
    setExtraCampaignValues: (values: ExtraCampaignFormValues) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({ extraCampaignValues, setExtraCampaignValues }) => {
    return (
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
    );
};

export default ColorSelector;