import { CheckIcon } from './Icons/CheckIcon';
import { CloseIcon } from './Icons/CloseIcon';

export const PromotionCard = () => {
  return (
    <div className='p-4 rounded-lg bg-success-25  border border-success-300 text-success-700 flex items-start justify-between gap-3'>
      <CheckIcon />

      <div className='flex flex-1 flex-col items-start text-sm'>
        <p className='mb-1 font-medium'>
          Compre 10 posts gerados por apenas
          <br />
          R$ 19,90
        </p>
        <p className='mb-3'>
          Garanta 10 posts para postar e gerar engajamento no seu perfil
        </p>
        <button className='font-medium'>{'Comprar agora ->'}</button>
      </div>

      <button>
        <CloseIcon />
      </button>
    </div>
  );
};
