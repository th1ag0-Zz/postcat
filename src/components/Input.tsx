import React, { InputHTMLAttributes } from 'react';
import { Controller } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLElement> {
  label: string;
  name: string;
  control: any;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  name,
  error,
  control,
  ...rest
}) => {
  return (
    <div className='w-full flex flex-col gap-1.5'>
      <label htmlFor={name} className='text-gray-700 font-medium'>
        {label}
      </label>

      <div className=''>
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <input
              id={name}
              type={rest.type || 'text'}
              value={field.value}
              onChange={field.onChange}
              className='w-full rounded-lg h-10 p-3 text-gray-900 border focus:outline-primary-300 focus:border-primary-300 focus:ring-4 focus:ring-offset-1 focus:ring-primary-300/40'
              {...rest}
            />
          )}
        />
      </div>

      {error && (
        <div className='text-gray-500'>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};
