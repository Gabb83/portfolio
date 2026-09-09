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
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 transition-all duration-300">
      {/* Desktop Nav */}
      <div
        className={`hidden md:flex items-center justify-between max-w-6xl mx-auto py-2.5 px-6 rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md shadow-lg shadow-black/5'
            : 'border border-transparent bg-transparent'
        }`}
      >
        <Link href="#home" className="group flex items-center gap-1 text-base font-bold tracking-tight text-zinc-900 dark:text-white">
          <span className="text-green-500 transition-transform group-hover:-translate-x-0.5">&lt;</span>
          <span>Gabriel Evangelista</span>
          <span className="text-green-500 transition-transform group-hover:translate-x-0.5"> /&gt;</span>
        </Link>

        <nav className="flex items-center gap-1 bg-zinc-100/50 dark:bg-zinc-800/40 p-1 rounded-full border border-zinc-200/50 dark:border-zinc-700/40 backdrop-blur-sm">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-4 py-1.5 rounded-full text-xs font-semibold text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-white dark:hover:bg-zinc-800 shadow-none hover:shadow-sm transition-all duration-200"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="h-4 w-[1px] bg-zinc-200 dark:bg-zinc-800" />
          <DarkModeToggle />
        </div>
      </div>

      {/* Mobile Top Bar */}
      <div
        className={`flex md:hidden items-center justify-between py-2.5 px-4 rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md shadow-lg shadow-black/5'
            : 'border border-transparent bg-transparent'
        }`}
      >
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menu"
          className="p-2 rounded-xl text-zinc-700 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
        >
          <Menu size={20} />
        </button>

        <Link href="#home" className="text-base font-bold tracking-tight text-zinc-900 dark:text-white">
          <span className="text-green-500">&lt;</span>
          GE
          <span className="text-green-500"> /&gt;</span>
        </Link>

        <DarkModeToggle compact />
      </div>

      {/* Backdrop Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 z-50 p-6 flex flex-col justify-between border-r border-zinc-200/80 dark:border-zinc-800/80 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          <div className="flex justify-between items-center pb-6 border-b border-zinc-100 dark:border-zinc-800">
            <h2 className="text-sm font-bold tracking-tight text-zinc-900 dark:text-white">
              <span className="text-green-500">&lt;</span>
              Navegação
              <span className="text-green-500"> /&gt;</span>
            </h2>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Fechar menu"
              className="w-8 h-8 flex items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          <nav className="flex flex-col gap-1.5 mt-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-500/10 transition-all duration-200"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
          <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Tema</span>
          <DarkModeToggle compact />
        </div>
      </aside>
    </header>
  );
}