import React from 'react';

export const UserProfileCard = ({ loading, user }) => {
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
        src='/profile-exemple.png'
        className='w-[60px] h-[60px] rounded-full overflow-hidden'
      />

      <div>
        <p className='font-bold'>{user.profile_name}</p>
        <p>{user.profile}</p>
        <p>
          {user.posts_count} publicações {user.followers_count} seguidores
        </p>
      </div>
    </div>
  );
};
