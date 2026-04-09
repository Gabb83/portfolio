'use client';
 
import IconGitHub from '@/assets/icons/redes/icon-github.svg';
import IconLinkedin from '@/assets/icons/redes/icon-linkedin.svg';
import IconInstagram from '@/assets/icons/redes/icon-instagram.svg';
import RedesSociais from '@/components/home/RedesSociais';
import Eu from '@/assets/eu.jpeg';
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { Download } from 'lucide-react';
 
const REDES = [
  { nome: 'linkedIn', href: 'https://www.linkedin.com/in/gabriel-evangelista-5a1a5a2aa/', src: IconLinkedin },
  { nome: 'github', href: 'https://github.com/Gabb83', src: IconGitHub },
];
 
export default function Home() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-24 pt-20 md:pt-32 pb-16 px-4 md:px-10"
    >
      {/* Foto */}
      <div className="relative flex-shrink-0">
        {/* Anel decorativo giratório */}
        <div className="absolute inset-[-6px] rounded-full border-[1.5px] border-dashed border-green-500/40 animate-spin-slow" />
        <Image
          alt="Gabriel Evangelista"
          src={Eu}
          className="w-[220px] md:w-[260px] rounded-full border-[2.5px] border-green-600 object-cover animate-float"
        />
        {/* Badge de status */}
        <div className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-700 rounded-full px-3 py-1 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[11px] font-medium text-gray-600 dark:text-gray-300">Disponível</span>
        </div>
      </div>
 
      {/* Texto */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg">
        {/* Saudação animada */}
        <p className="text-2xl md:text-4xl font-semibold mb-3 leading-tight">
          <TypeAnimation
            sequence={['Olá, meu nome é ', 800, 'Olá, meu nome é Gabriel']}
            speed={1}
            wrapper="span"
            repeat={0}
            className="text-green-600"
          />
        </p>
 
        {/* Role animada */}
        <p className="text-lg md:text-2xl font-semibold mb-4">
          <span className="text-gray-500 dark:text-gray-400">Eu sou </span>
          <span className="text-green-600">
            <TypeAnimation
              sequence={[3800, 'Desenvolvedor Front-end']}
              speed={60}
              repeat={0}
            />
          </span>
        </p>
 
        {/* Divisor */}
        <div className="w-10 h-[2px] bg-green-600 rounded-full mb-4 self-center md:self-start" />
 
        {/* Descrição */}
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          Atuo em Desenvolvimento web com foco em Front-end e suas tecnologias.
          Transformo ideias em interfaces intuitivas e responsivas. Atualmente,
          sou graduando em{' '}
          <span className="font-medium text-gray-800 dark:text-gray-100">
            Ciência da Computação
          </span>
          .
        </p>
 
        {/* Ações */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
          {/* Redes sociais */}
          <div className="flex items-center gap-2">
            {REDES.map(({ nome, href, src }) => (
              <RedesSociais key={nome} alt={nome} href={href} src={src} />
            ))}
          </div>
 
          {/* Separador */}
          <div className="hidden md:block w-[1px] h-6 bg-gray-200 dark:bg-gray-700 mx-1" />
 
          {/* Botão CV */}
          <Link
            href="/downloads/Currículo TI (Gabriel Evangelista).pdf"
            download="Currículo TI (Gabriel Evangelista).pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 dark:border-zinc-600
              relative overflow-hidden group text-sm font-medium
              hover:border-green-600 dark:hover:border-green-500 transition-colors duration-300"
          >
            <span className="absolute inset-0 bg-green-600 transition-transform duration-500 -translate-y-full group-hover:translate-y-0 ease-in-out" />
            <Download size={14} className="relative z-10 group-hover:text-white transition-colors duration-300" />
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Download CV
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}