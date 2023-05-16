import React, { useRef, useState } from 'react';
import { StorySliderSkeleton } from './Skeleton/StorySliderSkeleton';

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
  const containerRef = useRef<HTMLDivElement>(null);

  const [startScroll, setStartScroll] = useState(false);
  const [lastScrollValue, setLastScrollValue] = useState(0);
  const [scrollValue, setScrollValue] = useState(0);
  const [dragStart, setDragStart] = useState({
    scrollX: 0,
    pointerX: 0,
  });

  const containerWidth = storys.length * 128 + (storys.length + 1) * 16;

  const onMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setStartScroll(true);

    setDragStart({
      scrollX: (event.currentTarget as HTMLElement).scrollLeft,
      pointerX: event.clientX,
    });
  };

  const onMouseUp = () => {
    setScrollValue(lastScrollValue);
    setLastScrollValue(0);
    setStartScroll(false);
  };

  const onMouseLeave = () => {
    if (!startScroll) return;

    setScrollValue(lastScrollValue);
    setLastScrollValue(0);
    setStartScroll(false);
  };

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!startScroll) return;
    if (!containerRef.current) return;

    const distanceX = event.clientX - dragStart.pointerX;
    const newScrollValue = scrollValue + (dragStart.scrollX - distanceX);

    containerRef.current.scrollLeft = newScrollValue;

    setLastScrollValue(newScrollValue);
    console.log(newScrollValue);
  };

  if (loading) {
    return (
      <div className='overflow-x-hidden'>
        <div className='flex gap-4 px-4'>
          {[1, 2, 3, 4].map((story) => (
            <StorySliderSkeleton key={story} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className='overflow-x-auto scrollbar-hide' ref={containerRef}>
      <div
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
        className={`flex gap-4 px-4 w-[${containerWidth}px]`}
      >
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
