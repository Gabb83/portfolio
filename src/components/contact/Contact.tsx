import Link from 'next/link';
import Image from 'next/image';

import Input from './Input';
import IconGitHub from '@/assets/icons/redes/icon-github.svg';
import IconLinkedin from '@/assets/icons/redes/icon-linkedin.svg';
import IconInstagram from '@/assets/icons/redes/icon-instagram.svg';

export default function Contato(){

  const inputs = [
    {label: 'Nome'},
    {label: 'E-mail'},
  ];

  const redes = [
    {nome: 'linkedIn', href: 'https://www.linkedin.com/in/gabriel-evangelista-5a1a5a2aa/', src: IconLinkedin},
    {nome: 'github', href: 'https://github.com/Gabb83', src: IconGitHub},
    {nome: 'instagram', href: 'https://www.instagram.com/ev.gabrieel/', src: IconInstagram},
  ];

  return(
    <div className='py-4 bg-[var(--contato-bg-light)] dark:bg-[var(--contato-bg-dark)] px-[30px] lg:px-0'>
      <p className='font-[700] text-center text-[25px] py-5'>Contact</p>
      <div className='flex flex-col sm:flex-row items-center justify-center sm:justify-around gap-8 sm:gap-4'>
        <div>
          <p className='text-[20px] sm:text-[25px]'>Conecte-se comigo</p>
          <p className='text-[15px] sm:text-[18px]'>Deseja discutir oportunidades ou projetos? <span className='font-bold'>Mande uma mensagem!</span></p>
          <div className='flex flex-row items-center gap-2 mt-3 sm:my-2'>
            {redes.map((redes) => (
              <Link
                key={redes.nome}
                href={redes.href}
                target='_blank'
              >
                <Image
                  alt={redes.nome}
                  src={redes.src}
                  className='w-[30px] sm:hover:w-[35px] transition-all duration-500'
                />
              </Link>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          {inputs.map((inputs) => (
            <Input
              key={inputs.label}
              label={inputs.label}
            />
          ))}
          <textarea 
            rows={5}
            placeholder='Escreva sua mensagem'
            className='h-[140px] resize-none border border-gray-600 rounded-sm p-2 hover:opacity-50 transition-all duration-300'
          ></textarea>
          <div className='flex flex-row justify-end'>
            <button
              className='w-[120px] h-[40px] text-white bg-gray-700 rounded-sm cursor-pointer p-2 hover:opacity-90 transition-all duration-300 ease-in-out'
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}