export const PostCardSkeleton = () => {
  return (
    <div className='w-full flex flex-col items-start text-sm'>
      <div className='flex w-full justify-between mb-3'>
        <div className='flex items-center gap-2'>
          <div className='w-10 h-10 rounded-full bg-skeleton animate-pulse' />
          <div className='w-[100px] h-4 rounded-lg bg-skeleton animate-pulse' />
        </div>
      </div>

      <div className='rounded-lg w-full h-[200px] bg-skeleton animate-pulse' />

      <div className='mt-2 w-full flex flex-col gap-2'>
        <div className='w-full h-4 rounded-lg bg-skeleton animate-pulse' />
        <div className='w-full h-4 rounded-lg bg-skeleton animate-pulse' />
      </div>
    </div>
  );
};
