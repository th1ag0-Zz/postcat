import React, { useState } from 'react';
import clsx from 'clsx';

import ClipboardImg from '../assets/clipboard.svg';
import DownloadImg from '../assets/download.svg';

import { PostCardSkeleton } from './Skeleton/PostCardSkeleton';

export const PostCards = ({ loading, user, posts }) => {
  const [viewFullContent, setViewFullContent] = useState(false);

  const handleViewContent = () => setViewFullContent(true);

  if (loading) {
    return (
      <div className='flex flex-col gap-4'>
        {[1, 2].map((item) => (
          <PostCardSkeleton key={item} />
        ))}
      </div>
    );
  }

  return (
    <>
      {posts.map((card) => (
        <div key={card.id} className='w-full flex flex-col items-start text-sm'>
          <div className='flex w-full justify-between mb-3'>
            <div className='flex items-center gap-2'>
              <img
                src={'/profile-exemple.png'}
                alt='profile'
                className='w-10 h-10 rounded-full'
              />
              <p>{user.profile}</p>
            </div>

            <button
              type='button'
              className='font-medium text-[#475467] border border-gray-300 rounded-lg h-[38px] px-3 flex items-center gap-2'
            >
              <img src={DownloadImg} alt='baixar' />
              Baixar imagem
            </button>
          </div>

          <div className='rounded-lg overflow-hidden w-full flex justify-center mb-2'>
            <img src={card.imgUrl} alt='post' />
          </div>

          <button
            type='button'
            className='text-[13px] font-medium text-[#475467] border border-gray-300 rounded-lg h-[32px] px-2 flex items-center gap-1'
          >
            <img src={ClipboardImg} alt='copiar' />
            Copiar texto
          </button>

          <div className='mt-2'>
            <div
              className={clsx('relative overflow-hidden', {
                'h-[100px]': !viewFullContent,
              })}
            >
              <p dangerouslySetInnerHTML={{ __html: card.content }} />

              {!viewFullContent && (
                <div className='w-full h-[28px] absolute bottom-0 bg-gradient' />
              )}
            </div>

            {!viewFullContent && (
              <div className='w-full flex justify-center h-14 items-center'>
                <button
                  type='button'
                  className='font-medium text-[#475467] border border-gray-300 rounded-lg h-[38px] px-3'
                  onClick={handleViewContent}
                >
                  ver mais
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};
