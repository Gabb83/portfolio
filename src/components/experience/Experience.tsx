'use client'

import { useState } from 'react';
import { projetos } from '@/data/projetos';
import CardProjeto from './CardProjeto';

export default function Experience(){
  const [descricaoAtual, setDescricaoAtual] = useState('');
  const [tecnologiasAtuais, setTecnologiasAtuais] = useState<string[]>([]);

  return(
    <div id='experience' className='py-[2rem] md:py-[4rem]'>
      <div className='mb-6'>
        <h1 className='text-center text-[30px] font-[700] mb-10'>Projetos</h1>
        <p className='text-[20px] font-[500]'>Destaques</p>
      </div>
      <div className='flex flex-row justify-between gap-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          {projetos.map(({ nome, src, href, descricao, tecnologias }, idx) => (
            <div
              key={idx}
              onMouseEnter={() => {
                setDescricaoAtual(descricao);
                setTecnologiasAtuais(tecnologias.split(',').map(t => t.trim()));
              }}
              onMouseLeave={() => {
                setDescricaoAtual('');
                setTecnologiasAtuais([]);
              }}
            >
              <CardProjeto
                alt={nome}
                src={src}
                href={href}
              />
            </div>
          ))}
        </div>
        <div className='painel w-[450px] bg-[#292929] text-white p-4 rounded'>
          <p className='text-[17px] font-bold'>Descrição do Projeto:</p>
          <p className='py-3'>
            {descricaoAtual || 'Passe o mouse sobre um projeto para ver sua descrição.'}
          </p>
          <p className='text-[17px] font-bold mt-4'>Tecnologias usadas:</p>
          {tecnologiasAtuais.length > 0 ? (
            <ul className='text-sm text-gray-400 list-disc list-inside'>
              {tecnologiasAtuais.map((tec, idx) => (
                <li key={idx}>{tec}</li>
              ))}
            </ul>
          ) : (
            <p className='text-sm text-gray-400'>Passe o cursor em um projeto</p>
          )}
        </div>
      </div>
    </div>
  );
}