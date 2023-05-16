import React, { ReactNode } from 'react';

import useWindowDimensions from '../hooks/useWindowDimensions';

import { Header } from './Header';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { width } = useWindowDimensions();

  if (width > 520) {
    return (
      <div className='w-full h-screen flex items-center justify-center'>
        <div className='p-4'>
          <p>Esta aplicação está disponível somente em smartphones</p>
        </div>
      </div>
    );
  }

  return (
    <div className='w-full flex justify-center'>
      <div className='w-full max-w-[520px]'>
        <Header />

        {children}
      </div>
    </div>
  );
};
