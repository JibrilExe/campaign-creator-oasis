import React, { Component } from 'react';
import { Input } from '@/components/ui/input';
import ColorSelector from './ColorSelector';
import ScenerySelector from './ScenerySelector';
import { StaggerContainer, StaggerItem } from '@/lib/animations';
import { CampaignFormValues, ExtraCampaignFormValues } from '@/lib/types';

interface FormProps {
    campaignValues: CampaignFormValues;
    extraCampaignValues: ExtraCampaignFormValues;
    setCampaignValues: (values: CampaignFormValues) => void;
    setExtraCampaignValues: (values: ExtraCampaignFormValues) => void;
    handleChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class Form extends Component<FormProps> {
    render() {
        const { campaignValues, extraCampaignValues, setExtraCampaignValues, handleChangeInput } = this.props;

        return (
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
                <ColorSelector 
                    extraCampaignValues={extraCampaignValues} 
                    setExtraCampaignValues={setExtraCampaignValues} 
                />
                <ScenerySelector 
                    extraCampaignValues={extraCampaignValues} 
                    setExtraCampaignValues={setExtraCampaignValues} 
                />
            </StaggerContainer>
        );
    }
}

export default Form;