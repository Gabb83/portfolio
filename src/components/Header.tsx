'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import IconSol from '@/assets/icons/modo/icons8-sol.svg';
import IconSolNeon from '@/assets/icons/modo/icons8-sol-neon.svg';
import IconLua from '@/assets/icons/modo/icons8-lua.png';
import IconLuaNeon from '@/assets/icons/modo/icons8-lua-neon.png';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleButtonDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.style.setProperty('--card-bg-light', '#1a202c');
      root.style.setProperty('--card-bg-dark', '#2d3748');
    } else {
      root.classList.remove('dark');
      root.style.setProperty('--card-bg-light', '#ffffff');
      root.style.setProperty('--card-bg-dark', '#f7fafc');
    }
  }, [darkMode]);

  return (
    <header className='relative z-50'>
      {/* Top bar */}
      <div className='flex justify-between items-center p-4'>
        <button className='md:hidden' onClick={() => setMenuOpen(true)}>
          <Menu className='' />
        </button>

        <h1 className='text-xl font-bold'>
          <span>&lt;</span>Gabriel Evangelista<span> /&gt;</span>
        </h1>

        <div className='hidden md:flex items-center gap-8 font-semibold'>
          {['Home', 'Skills', 'Experience', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className='relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full'
            >
              {item}
            </Link>
          ))}
          <div className='flex items-center gap-2'>
            <Image alt='ícone sol' src={!darkMode ? IconSol : IconSolNeon} className='w-[30px]' />
            <div
              className='w-[50px] h-[25px] rounded-full bg-gray-300 dark:bg-gray-700 flex items-center p-[2px] cursor-pointer'
              onClick={handleButtonDarkMode}
            >
              <div
                className={`w-[22px] h-[22px] rounded-full transition-transform duration-700 ${
                  darkMode ? 'translate-x-[25px] bg-black' : 'translate-x-0 bg-white'
                }`}
              />
            </div>
            <Image alt='ícone lua' src={!darkMode ? IconLua : IconLuaNeon} className='w-[30px]' />
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-zinc-900 bg-opacity-100 rounded-r-2xl shadow-lg transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <div className='flex justify-between items-center p-4 border-b border-gray-200 dark:border-zinc-700'>
          <h2 className='text-lg font-bold'>Menu</h2>
          <button onClick={() => setMenuOpen(false)}>
            <X className='text-black dark:text-white' />
          </button>
        </div>
        <nav className='flex flex-col p-4 gap-4 font-semibold'>
          {['Home', 'Skills', 'Experience', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className='hover:text-green-600'
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <div className='flex items-center gap-2 mt-4'>
            <Image alt='ícone sol' src={!darkMode ? IconSol : IconSolNeon} className='w-[25px]' />
            <div
              className='w-[50px] h-[25px] rounded-full bg-gray-300 dark:bg-gray-700 flex items-center p-[2px] cursor-pointer'
              onClick={handleButtonDarkMode}
            >
              <div
                className={`w-[22px] h-[22px] rounded-full transition-transform duration-700 ${
                  darkMode ? 'translate-x-[25px] bg-black' : 'translate-x-0 bg-white'
                }`}
              />
            </div>
            <Image alt='ícone lua' src={!darkMode ? IconLua : IconLuaNeon} className='w-[25px]' />
          </div>
        </nav>
      </div>
    </header>
  );
}
