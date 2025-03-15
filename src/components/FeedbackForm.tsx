
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FadeIn, SlideUp } from '@/lib/animations';
import ImageGrid from './ImageGrid';
import { ImageOption, FeedbackFormValues } from '@/lib/types';
import { Textarea } from '@/components/ui/textarea';

interface FeedbackFormProps {
  images: ImageOption[];
  onSubmit: (values: FeedbackFormValues) => void;
  title: string;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ images, onSubmit, title }) => {
  const [values, setValues] = useState<FeedbackFormValues>({
    image: '',
    feedback: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!values.image) {
      // Display a warning
      return;
    }
    onSubmit(values);
  };

  return (
    <FadeIn>
      <div className="mt-8 p-6 glass-panel rounded-2xl">
        <SlideUp delay={0.1}>
          <h2 className="text-2xl font-display font-semibold mb-4">{title}</h2>
        </SlideUp>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <SlideUp delay={0.2}>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Select a design</label>
              <div className="mt-2">
                <ImageGrid
                  images={images}
                  selectedImage={values.image}
                  onSelect={(imageId) => setValues({ ...values, image: imageId })}
                  columns={2}
                />
              </div>
            </div>
          </SlideUp>

          <SlideUp delay={0.3}>
            <div className="space-y-2">
              <label htmlFor="feedback" className="block text-sm font-medium">
                Your Feedback
              </label>
              <Textarea
                id="feedback"
                placeholder="Tell us what you think of this design and how it could be improved..."
                value={values.feedback}
                onChange={(e) => setValues({ ...values, feedback: e.target.value })}
                className="h-32"
              />
            </div>
          </SlideUp>

          <SlideUp delay={0.4}>
            <Button 
              type="submit" 
              className="w-full btn-primary"
              disabled={!values.image}
            >
              Submit Feedback
            </Button>
          </SlideUp>
        </form>
      </div>
    </FadeIn>
  );
};

export default FeedbackForm;
