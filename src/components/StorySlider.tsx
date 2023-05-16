import React from 'react';

interface StorysSliderProps {
  loading?: boolean;
}

const bgColors = [
  'linear-gradient(180deg, #9148D1 0%, #6584EA 100%)',
  'linear-gradient(180deg, #BC34AF 0%, #DC5489 100%)',
  'linear-gradient(180deg, #D44A9B 0%, #E46F5D 100%)',
];

const storys = [
  { id: 0, text: 'teste', bgColor: bgColors[0] },
  { id: 1, text: 'teste', bgColor: bgColors[1] },
  { id: 2, text: 'teste', bgColor: bgColors[2] },
  { id: 3, text: 'teste', bgColor: bgColors[0] },
];

export const StorySlider: React.FC<StorysSliderProps> = ({ loading }) => {
  if (loading) {
    return (
      <div className='overflow-x-hidden'>
        <div className='flex gap-4 px-4'>
          {[1, 2, 3, 4].map((story) => (
            <div
              key={story}
              className='flex items-center justify-center min-w-[128px] max-w-[128px] h-[228px] rounded-xl bg-skeleton animate-pulse'
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className='overflow-x-hidden'>
      <div className='flex gap-4 px-4'>
        {storys.map((story) => (
          <button
            key={story.id}
            className='flex items-center justify-center min-w-[128px] max-w-[128px] h-[228px] rounded-xl'
            style={{ background: story.bgColor }}
          />
        ))}
      </div>
    </div>
  );
};
