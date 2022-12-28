'use client';

import React, {useRef} from 'react';
import LabelInput from '#/src/components/Controls/LabelInput';
import Image from 'next/image';
import IconCross from '../Icons/IconCross';
import Button from '../Controls/Button';
import TextareaField from '../Controls/TextareaField';
import LabelTextareaField from '../Controls/LabelTextarea';

const intialInformation = {
  phoneNumber: null,
  content: null,
} as {
  phoneNumber: HTMLInputElement | null;
  content: HTMLTextAreaElement | null;
};

const Contact = () => {
  const informationRef = useRef<typeof intialInformation>(intialInformation);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const {phoneNumber, content} = informationRef?.current!;
    console.log('🚀 ~ file: index.tsx:24 ~ handleSubmit ~ content', content?.value);
    console.log('🚀 ~ file: index.tsx:24 ~ handleSubmit ~ phoneNumber', phoneNumber?.value);
  };

  return (
    <div className="fixed bottom-6 right-6 z-10">
      <div className="w-[300px] max-h-[460px] p-3.5 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 relative">
        <div className="absolute right-0 top-0  z-20">
          <Button type="button" label={<IconCross />} className="row-center w-12 h-12" />
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">Contact Me</h5>
            <div className="absolute right-[-10px] top-[6px] pointer-events-none">
              <Image
                src="/images/Brazuca-Sitting.webp"
                alt="Brazuca-Sitting"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div>
            <LabelInput
              ref={(el) => (informationRef.current.phoneNumber = el)}
              htmlFor="phoneNumber"
              label="Your Phone Number *"
              type="number"
              id="phoneNumber"
              maxLength={20}
              ariaDescribedby="Phone Number Input"
              required
            />
          </div>
          <div>
            <LabelTextareaField
              ref={(el) => (informationRef.current.content = el)}
              className="resize-none"
              id="content"
              label="Content *"
              ariaDescribedby="Content Input"
              required
            />
          </div>
          <Button type="submit" label="Send" className="row-center w-full" variant="primary" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
