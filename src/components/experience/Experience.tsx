'use client';
 
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projetos } from '@/data/projetos';
import CardProjeto from './CardProjeto';
import { ChevronLeft, ChevronRight } from 'lucide-react';
 
export default function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [hoveredProject, setHoveredProject] = useState<{
    descricao: string;
    tecnologias: string[];
  } | null>(null);
 
  const totalSlides = projetos.length;
 
  const goTo = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };
 
  const nextSlide = () => {
    const next = (currentIndex + 1) % totalSlides;
    setDirection(1);
    setCurrentIndex(next);
  };
 
  const prevSlide = () => {
    const prev = (currentIndex - 1 + totalSlides) % totalSlides;
    setDirection(-1);
    setCurrentIndex(prev);
  };
 
  const projeto = projetos[currentIndex];
 
  return (
    <section
      id="experience"
      className="relative py-20 px-0 bg-zinc-900/60 text-white rounded-3xl border border-zinc-800/80 backdrop-blur-xl overflow-hidden my-12"
    >
      {/* Glow Effect de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-green-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Título */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold mb-3">
          <span>O que eu construí</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          Projetos em Destaque
        </h2>
        <div className="w-12 h-[2.5px] bg-gradient-to-r from-green-500 to-emerald-400 rounded-full mx-auto mt-4" />
      </div>

      {/* Layout principal */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto px-4 md:px-8 items-stretch">

        {/* Carrossel */}
        <div className="relative w-full lg:w-3/5 flex flex-col justify-between gap-5">
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/80 shadow-2xl shadow-black/40 group">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                onMouseEnter={() =>
                  setHoveredProject({
                    descricao: projeto.descricao,
                    tecnologias: projeto.tecnologias.split(',').map((t) => t.trim()),
                  })
                }
                onMouseLeave={() => setHoveredProject(null)}
              >
                <CardProjeto
                  alt={projeto.nome}
                  src={projeto.src}
                  href={projeto.href}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controles */}
          <div className="flex items-center justify-between px-2 pt-1">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex
                      ? 'w-6 h-2 bg-gradient-to-r from-green-500 to-emerald-400'
                      : 'w-2 h-2 bg-zinc-700 hover:bg-zinc-500'
                  }`}
                />
              ))}
            </div>

            {/* Setas */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={prevSlide}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-800/80 hover:bg-green-600/20 border border-zinc-700/80 hover:border-green-500/50 text-zinc-300 hover:text-green-400 active:scale-95 transition-all duration-300 cursor-pointer shadow-sm"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-800/80 hover:bg-green-600/20 border border-zinc-700/80 hover:border-green-500/50 text-zinc-300 hover:text-green-400 active:scale-95 transition-all duration-300 cursor-pointer shadow-sm"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Painel lateral */}
        <div className="w-full lg:w-2/5 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 p-6 md:p-8 backdrop-blur-md flex flex-col justify-between gap-6 shadow-xl shadow-black/20">

          <div className="space-y-6">
            {/* Nome do projeto */}
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1 block">
                Projeto
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                {projeto.nome}
              </h3>
            </div>

            <div className="h-[1px] bg-zinc-800/80" />

            {/* Descrição */}
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2 block">
                Sobre
              </span>
              <p className="text-zinc-400 text-sm leading-relaxed min-h-[90px]">
                {hoveredProject?.descricao || projeto.descricao || 'Passe o mouse sobre o projeto para ver a descrição.'}
              </p>
            </div>
          </div>

          {/* Tecnologias */}
          <div className="pt-4 border-t border-zinc-800/80">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-3 block">
              Tecnologias Utilizadas
            </span>
            <div className="flex flex-wrap gap-2">
              {(hoveredProject?.tecnologias ?? projeto.tecnologias.split(',').map((t) => t.trim())).map(
                (tec, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-3 py-1 rounded-xl bg-zinc-800/60 border border-zinc-700/60 text-zinc-300 shadow-sm"
                  >
                    {tec}
                  </span>
                )
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}