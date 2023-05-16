import React from 'react';

import ProfileImg from '../assets/profile-exemple.png';

interface UserProfileCardProps {
  loading?: boolean;
}

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  loading,
}) => {
  if (loading) {
    return (
      <div className='flex items-start gap-4'>
        <div className='w-[60px] h-[60px] rounded-full overflow-hidden bg-skeleton animate-pulse' />

        <div className='flex flex-col flex-1 gap-1'>
          <div className='w-full rounded-full h-[20px] bg-skeleton animate-pulse' />
          <div className='w-full rounded-full h-[20px] bg-skeleton animate-pulse' />
          <div className='flex gap-2'>
            <div className='w-full rounded-full h-[20px] bg-skeleton animate-pulse' />
            <div className='w-full rounded-full h-[20px] bg-skeleton animate-pulse' />
            <div className='w-full rounded-full h-[20px] bg-skeleton animate-pulse' />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='flex items-start gap-4 text-sm'>
      <img
        src={ProfileImg}
        className='w-[60px] h-[60px] rounded-full overflow-hidden'
      />

      <div>
        <p className='font-bold'>Rio belleza</p>
        <p>@riobelleza</p>
        <p>3.165 publicações 46 mil seguidores </p>
      </div>
    </div>
  );
};
