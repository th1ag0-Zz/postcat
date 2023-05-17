import { Menu } from '@headlessui/react';

import LogoImg from '../assets/logo.png';
import { MenuIcon } from './Icons/MenuIcon';

export const Header = () => {
  return (
    <header className='w-full h-[72px] flex items-center px-4 justify-between border-b border-gray-200'>
      <img src={LogoImg} alt='logo' />

      <div className='relative'>
        <Menu>
          <Menu.Button className='p-2'>
            <MenuIcon />
          </Menu.Button>

          <Menu.Items className='w-[120px] absolute top-10 right-0 p-2 border rounded-lg bg-white flex flex-col gap-2 items-center'>
            <Menu.Item>
              <a href='/' className='p-1'>
                Opção 1
              </a>
            </Menu.Item>
            <Menu.Item>
              <a href='/' className='p-1'>
                Opção 2
              </a>
            </Menu.Item>
            <Menu.Item>
              <a href='/' className='p-1'>
                Opção 3
              </a>
            </Menu.Item>
            <Menu.Item>
              <a href='/' className='p-1'>
                Opção 4
              </a>
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </header>
  );
};
