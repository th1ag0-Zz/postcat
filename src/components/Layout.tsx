import React, { ReactNode } from 'react';

import { Header } from './Header';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-full max-w-[520px]'>
        <Header />

        {children}
      </div>
    </div>
  );
};
