import LogoImg from '../assets/logo.png';
import { MenuIcon } from './Icons/MenuIcon';

export const Header = () => {
  return (
    <header className='w-full h-[72px] flex items-center px-4 justify-between border-b border-gray-200'>
      <img src={LogoImg} alt='logo' />

      <button className='p-2'>
        <MenuIcon />
      </button>
    </header>
  );
};
