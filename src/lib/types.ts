
export interface CampaignFormValues {
  season: string;
  position: string;
  stance: string;
  extra_prompt: string;
}

export interface ExtraCampaignFormValues {
  color: string;
  scenery: string;
}


export interface FeedbackFormValues {
  image: string;
  feedback: string;
}

export interface ImageOption {
  id: string;
  src: string;
  alt: string;
}

export interface FormStepProps {
  onSubmit: () => void;
}
