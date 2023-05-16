import { useEffect, useState } from 'react';

import { Layout } from '../components/Layout';
import { PromotionCard } from '../components/PromotionCard';
import { UserProfileCard } from '../components/UserProfileCard';
import { StorySlider } from '../components/StorySlider';
import { PostCards } from '../components/PostCards';

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <div className='pb-8'>
        <div className='w-full flex flex-col px-4 mt-5 gap-7'>
          <PromotionCard />

          <div className='border-b border-gray-200 h-[92px]'>
            <UserProfileCard loading={isLoading} />
          </div>
        </div>

        <div className='w-full my-6'>
          <div className='px-4 flex flex-col gap-1 mb-5'>
            <p className='text-4xl font-semibold text-gray-900'>Stories</p>
            <p className='text-lg text-gray-500'>
              Sugestão de stories para você postar
            </p>
          </div>

          <StorySlider loading={isLoading} />
        </div>

        <div className='px-4'>
          <div className='border-t border-gray-200 pt-6 mb-3'>
            <p className='text-4xl font-semibold text-gray-900'>Posts</p>
            <p className='text-lg text-gray-500'>
              Sugestão de stories para você postar
            </p>
          </div>

          <PostCards loading={isLoading} />
        </div>
      </div>
    </Layout>
  );
};
