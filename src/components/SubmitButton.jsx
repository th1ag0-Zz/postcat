import React from 'react';

export const SubmitButton = ({ text }) => {
  return (
    <button
      type='submit'
      className='w-full rounded-full bg-primary-600 text-white h-10'
    >
      {text}
    </button>
  );
};
