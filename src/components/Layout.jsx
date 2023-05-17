import React, { ReactNode } from 'react';

import { Header } from './Header';

export const Layout = ({ children }) => {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-full max-w-[520px]'>
        <Header />

        {children}
      </div>
    </div>
  );
};
