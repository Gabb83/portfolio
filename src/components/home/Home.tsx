import IconGitHub from '@/assets/icons/redes/icon-github.svg';
import IconLinkedin from '@/assets/icons/redes/icon-linkedin.svg';
import IconInstagram from '@/assets/icons/redes/icon-instagram.svg';
import RedesSociais from '@/components/home/RedesSociais';
import Eu from '@/assets/eu.jpeg'; 
import Image from 'next/image';
import Link from 'next/link';

const REDES = [
  {nome: 'linkedIn', href: 'https://www.linkedin.com/in/gabriel-evangelista-5a1a5a2aa/', src: IconLinkedin},
  {nome: 'github', href: 'https://github.com/Gabb83', src: IconGitHub},
  {nome: 'instagram', href: 'https://www.instagram.com/ev.gabrieel/', src: IconInstagram},
];

export default function Home(){
  return(
    <div id='home' className='flex flex-col md:flex-row justify-center items-center gap-[5rem] pt-[8rem] pb-[4rem] px-2 md:px-10'>
      <Image
        alt='eu'
        src={Eu}
        className='w-[250px] border-[2px] border-[#16b362] rounded-full'
      />
      <div>
        <p className='text-[25px] md:text-[35px] font-[600] mb-4'>Olá, meu nome é <span className='text-[#189655]'>Gabriel</span></p>
        <p className='text-[20px] md:text-[25px] font-[600] mb-3'>Eu sou <span className='text-[#189655]'>Desenvolvedor Front-end</span></p>
        <p className='text-[18px] md:text-[20px]'>Atuo em Desenvolvimento web, como foco em Front-end e suas tecnologias. Transformo ideias em interfaces intuitivas e responsivas. Atualmente, sou graduando em Ciência da Computação.</p>
        <div className='flex md:flex-row items-center gap-3 pt-3'>
          { REDES.map(({nome, href, src}) => (
            <RedesSociais
              key={nome}
              alt={nome}
              href={href}
              src={src}
            />
          ))}
          <Link
            href='/downloads/Currículo TI (Gabriel Evangelista).pdf'
            download='Currículo TI (Gabriel Evangelista).pdf'
            className='w-[110px] h-[38px] flex flex-row items-center justify-center border rounded-md ml-7 relative overflow-hidden group'
          >
            <span className="absolute inset-0 bg-green-600 transition-transform duration-500 transform -translate-y-full group-hover:translate-y-0 ease-in-out"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">CV</span>
          </Link>
        </div>
      </div>
    </div>
  );
}