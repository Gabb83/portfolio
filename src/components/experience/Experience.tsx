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
      className="py-16 bg-[#1e1e22] text-white rounded-2xl overflow-hidden"
    >
      {/* Título */}
      <div className="text-center mb-12">
        <p className="text-xs font-semibold tracking-[0.2em] text-green-500 uppercase mb-2">
          O que eu construí
        </p>
        <h2 className="text-3xl font-bold">Projetos</h2>
        <div className="w-10 h-[2px] bg-green-500 rounded-full mx-auto mt-3" />
      </div>
 
      {/* Layout principal */}
      <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto px-6 md:px-8 items-stretch">
 
        {/* Carrossel */}
        <div className="relative w-full md:w-3/5 flex flex-col gap-4">
          <div className="relative overflow-hidden rounded-xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
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
          <div className="flex items-center justify-between px-1">
            {/* Dots */}
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex
                      ? 'w-5 h-2 bg-green-500'
                      : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
 
            {/* Setas */}
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-500/30 hover:border-green-500 border border-white/10 transition-all duration-300 cursor-pointer"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextSlide}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-500/30 hover:border-green-500 border border-white/10 transition-all duration-300 cursor-pointer"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
 
        {/* Painel lateral */}
        <div className="w-full md:w-2/5 bg-[#141416] rounded-2xl p-6 border border-white/5 flex flex-col gap-6">
 
          {/* Nome do projeto */}
          <div>
            <p className="text-xs text-white/30 uppercase tracking-widest mb-1">Projeto</p>
            <h3 className="text-xl font-semibold text-white">{projeto.nome}</h3>
          </div>
 
          {/* Divisor */}
          <div className="h-[0.5px] bg-white/10" />
 
          {/* Descrição */}
          <div>
            <p className="text-xs text-white/30 uppercase tracking-widest mb-2">Descrição</p>
            <p className="text-gray-400 text-sm leading-relaxed min-h-[80px]">
              {hoveredProject?.descricao || projeto.descricao || 'Passe o mouse sobre o projeto para ver a descrição.'}
            </p>
          </div>
 
          {/* Tecnologias */}
          <div>
            <p className="text-xs text-white/30 uppercase tracking-widest mb-3">Tecnologias</p>
            <div className="flex flex-wrap gap-2">
              {(hoveredProject?.tecnologias ?? projeto.tecnologias.split(',').map((t) => t.trim())).map(
                (tec, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
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