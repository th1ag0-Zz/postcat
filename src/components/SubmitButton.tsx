import React from 'react';

interface SubmitButtonProps {
  text: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ text }) => {
  return (
    <button
      type='submit'
      className='w-full rounded-full bg-primary-600 text-white h-10'
    >
      {text}
    </button>
  );
};
