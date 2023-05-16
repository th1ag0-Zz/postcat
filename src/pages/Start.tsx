import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

import UserImg from '../assets/user.png';

import { Layout } from '../components/Layout';
import { Input } from '../components/Input';
import { SubmitButton } from '../components/SubmitButton';

const startFormSchema = yup.object({
  user: yup.string().required('Preencha esse campo, por favor.'),
  email: yup
    .string()
    .email('E-mail com formato inválido.')
    .required('Preencha esse campo, por favor.'),
});

interface StartFormProps {
  user: string;
  email: string;
}

export const Start = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<StartFormProps>({
    mode: 'onSubmit',
    resolver: yupResolver(startFormSchema),
    defaultValues: {
      user: '',
      email: '',
    },
  });

  const onSubmit = (data: StartFormProps) => {
    console.log(data);
    navigate('/confirm-code');
  };

  return (
    <Layout>
      <div className='w-full px-4 pt-[38px]'>
        <div className='flex flex-col items-center'>
          <p className='mb-4 text-4xl font-semibold text-center color-[#010101]'>
            Conteúdo para o seu Instagram
          </p>

          <p className='mb-10 text-lg text-center text-gray-transparent'>
            Crie conteúdo para seu Instagram com Inteligência Artificial
          </p>

          <img src={UserImg} alt='user' />

          <form
            onSubmit={handleSubmit(onSubmit)}
            className='w-full mt-5 flex flex-col gap-4'
          >
            <Input
              control={control}
              label='Perfil'
              name='user'
              placeholder='@exemplo'
              error={errors.user?.message}
            />

            <Input
              control={control}
              label='Email'
              name='email'
              type='email'
              placeholder='email@exemplo.com'
              error={errors.email?.message}
            />

            <SubmitButton text='Gerar conteúdo ->' />
          </form>
        </div>
      </div>
    </Layout>
  );
};
