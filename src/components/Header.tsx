import LogoImg from '../assets/logo.png';
import MenuIcon from '../assets/menu-icon.svg';

export const Header = () => {
  return (
    <header className='w-full h-[72px] flex items-center px-4 justify-between border-b border-gray-200'>
      <img src={LogoImg} alt='logo' />

      <button className='p-2'>
        <img src={MenuIcon} alt='menu' />
      </button>
    </header>
  );
};
