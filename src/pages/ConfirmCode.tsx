import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { Input } from '../components/Input';
import { SubmitButton } from '../components/SubmitButton';

const codeVerifySchema = yup.object({
  code: yup.string().required('Preencha esse campo, por favor.'),
});

interface CodeVerifyFormProps {
  code: string;
}

export const ConfirmCode = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CodeVerifyFormProps>({
    mode: 'onSubmit',
    resolver: yupResolver(codeVerifySchema),
    defaultValues: {
      code: '',
    },
  });

  const onSubmit = (data: CodeVerifyFormProps) => {
    console.log(data);
    navigate('/home');
  };

  return (
    <Layout>
      <div className='w-full px-4 pt-[38px]'>
        <div className='flex flex-col items-center'>
          <p className='mb-4 text-4xl font-semibold text-center color-[#010101]'>
            Confirme o código
          </p>

          <p className='mb-10 text-lg text-center text-gray-transparent'>
            Enviado para o seu email xx@dlweb.co
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className='w-full mt-5 flex flex-col gap-4'
          >
            <Input
              control={control}
              label='Código'
              name='code'
              placeholder=''
              error={errors.code?.message}
            />

            <SubmitButton text='Gerar conteúdo ->' />
          </form>
        </div>
      </div>
    </Layout>
  );
};
