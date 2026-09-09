'use client';

import IconGitHub from '@/assets/icons/redes/icon-github.svg';
import IconLinkedin from '@/assets/icons/redes/icon-linkedin.svg';
import RedesSociais from '@/components/home/RedesSociais';
import Eu from '@/assets/eu.jpeg';
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { Download, Sparkles } from 'lucide-react';

const REDES = [
  { nome: 'linkedIn', href: 'https://www.linkedin.com/in/gabriel-evangelista-5a1a5a2aa/', src: IconLinkedin },
  { nome: 'github', href: 'https://github.com/Gabb83', src: IconGitHub },
];

export default function Home() {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 pt-24 md:pt-20 pb-20 px-6 md:px-12 overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-green-500/10 dark:bg-green-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      <div className="relative flex-shrink-0 group">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-green-600 to-emerald-400 blur-md opacity-40 group-hover:opacity-75 transition-opacity duration-500" />
        <div className="absolute -inset-3 rounded-full border border-dashed border-green-500/50 animate-spin-slow" />
        <div className="relative w-[210px] h-[210px] md:w-[270px] md:h-[270px] rounded-full p-1 bg-gradient-to-b from-green-500 to-emerald-700 shadow-xl shadow-green-900/10">
          <Image
            alt="Gabriel Evangelista"
            src={Eu}
            priority
            className="w-full h-full rounded-full object-cover animate-float"
          />
        </div>

        <div className="absolute bottom-2 right-2 flex items-center gap-2 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800 rounded-full px-3.5 py-1.5 shadow-lg shadow-black/5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-xs font-semibold tracking-wide text-zinc-700 dark:text-zinc-200">
            Disponível para projetos
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-xs font-semibold mb-4">
          <span>Bem-vindo ao meu portfólio</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-3 text-zinc-900 dark:text-white leading-tight">
          <TypeAnimation
            sequence={['Olá, meu nome é ', 800, 'Olá, sou Gabriel']}
            speed={1}
            wrapper="span"
            repeat={0}
          />
        </h1>
        <div className="text-xl md:text-3xl font-semibold mb-5 h-9">
          <span className="text-zinc-500 dark:text-zinc-400">Eu sou </span>
          <span className="bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
            <TypeAnimation
              sequence={[3800, 'Desenvolvedor Fullstack']}
              speed={60}
              repeat={0}
            />
          </span>
        </div>

        <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed mb-8">
          Desenvolvo aplicações web ponta a ponta (Fullstack), com especialização em Front-end. Transformo requisitos complexos em sistemas eficientes e intencionais, unindo fundamentação técnica em 
          {" "}<span className="font-semibold text-zinc-900 dark:text-white underline decoration-green-500/50 underline-offset-4">
            Ciência da Computação
          </span> {" "}
          a uma excelente experiência de usuário.{' '}
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <Link
            href="/downloads/Currículo TI (Gabriel Evangelista).pdf"
            download="Currículo TI (Gabriel Evangelista).pdf"
            className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-green-500/20 overflow-hidden"
          >
            <Download size={16} className="transition-transform group-hover:-translate-y-0.5" />
            <span>Download CV</span>
          </Link>


          <div className="hidden sm:block w-[1px] h-8 bg-zinc-200 dark:bg-zinc-800 mx-1" />

          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-zinc-700/50">
            {REDES.map(({ nome, href, src }) => (
              <RedesSociais key={nome} alt={nome} href={href} src={src} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}