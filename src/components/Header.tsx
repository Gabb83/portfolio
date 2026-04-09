'use client';
 
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import IconSol from '@/assets/icons/modo/icons8-sol.svg';
import IconSolNeon from '@/assets/icons/modo/icons8-sol-neon.svg';
import IconLua from '@/assets/icons/modo/icons8-lua.png';
import IconLuaNeon from '@/assets/icons/modo/icons8-lua-neon.png';
 
const NAV_ITEMS = ['Home', 'Skills', 'Experience', 'Contact'] as const;
 
export default function Header() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 
  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [menuOpen]);
 
  const DarkModeToggle = ({ compact = false }: { compact?: boolean }) => (
    <div className={`flex items-center ${compact ? 'gap-1.5' : 'gap-2'}`}>
      <Image
        alt="sol"
        src={darkMode ? IconSolNeon : IconSol}
        className={compact ? 'w-[20px]' : 'w-[24px]'}
      />
      <button
        onClick={toggleDarkMode}
        aria-label="Alternar tema"
        className={`relative flex items-center p-[2px] rounded-full cursor-pointer transition-colors duration-300
          ${compact ? 'w-[38px] h-[20px]' : 'w-[44px] h-[24px]'}
          ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}
      >
        <div
          className={`rounded-full transition-all duration-500
            ${compact ? 'w-[14px] h-[14px]' : 'w-[18px] h-[18px]'}
            ${darkMode ? 'bg-green-400 shadow-[0_0_6px_1px_rgba(34,197,94,0.6)]' : 'bg-white'}
            ${darkMode && !compact ? 'translate-x-[22px]' : ''}
            ${darkMode && compact ? 'translate-x-[16px]' : ''}
            ${!darkMode ? 'translate-x-0' : ''}
          `}
        />
      </button>
      <Image
        alt="lua"
        src={darkMode ? IconLuaNeon : IconLua}
        className={compact ? 'w-[20px]' : 'w-[24px]'}
      />
    </div>
  );
 
  return (
    <header className="relative z-50">
      {/* Desktop */}
      <div
        className={`hidden md:flex justify-between items-center py-3 px-6 rounded-xl transition-all duration-300
          ${scrolled
            ? 'border border-white/10 dark:border-white/5 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-sm'
            : 'border border-transparent bg-transparent'
          }`}
      >
        <h1 className="text-lg font-bold tracking-tight">
          <span className="text-green-600">&lt;</span>
          Gabriel Evangelista
          <span className="text-green-600"> /&gt;</span>
        </h1>
 
        <nav className="flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-sm font-medium text-gray-600 dark:text-gray-300
                hover:text-black dark:hover:text-white transition-colors duration-200
                after:absolute after:bottom-[-3px] after:left-0 after:h-[1.5px] after:w-0
                after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </Link>
          ))}
        </nav>
 
        <div className="flex items-center gap-3">
          <div className="h-4 w-[0.5px] bg-gray-200 dark:bg-gray-700" />
          <DarkModeToggle />
        </div>
      </div>
 
      {/* Mobile bar */}
      <div className="flex md:hidden justify-between items-center py-3 px-2">
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menu"
          className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
        >
          <Menu size={22} />
        </button>
 
        <h1 className="text-base font-bold tracking-tight">
          <span className="text-green-600">&lt;</span>
          GE
          <span className="text-green-600"> /&gt;</span>
        </h1>
 
        <DarkModeToggle compact />
      </div>
 
      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden
          ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />
 
      {/* Drawer mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 z-50 rounded-r-2xl shadow-xl
          transform transition-transform duration-300 ease-in-out md:hidden
          ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
          ${darkMode ? 'bg-zinc-900 text-white' : 'bg-white text-black'}`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-100 dark:border-zinc-800">
          <h2 className="text-sm font-bold">
            <span className="text-green-600">&lt;</span>
            Menu
            <span className="text-green-600"> /&gt;</span>
          </h2>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Fechar menu"
            className="w-7 h-7 flex items-center justify-center rounded-full
              bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700
              transition-colors cursor-pointer"
          >
            <X size={14} />
          </button>
        </div>
 
        <nav className="flex flex-col p-3 gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm font-medium
                text-gray-600 dark:text-gray-300
                hover:bg-gray-50 dark:hover:bg-zinc-800
                hover:text-green-600 dark:hover:text-green-400
                transition-all duration-200"
            >
              {item}
            </Link>
          ))}
        </nav>
 
        <div className="absolute bottom-0 left-0 right-0 px-4 py-4 border-t border-gray-100 dark:border-zinc-800">
          <DarkModeToggle compact />
        </div>
      </div>
    </header>
  );
}