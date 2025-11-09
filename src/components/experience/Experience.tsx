'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { projetos } from '@/data/projetos'
import CardProjeto from './CardProjeto'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [descricaoAtual, setDescricaoAtual] = useState('')
  const [tecnologiasAtuais, setTecnologiasAtuais] = useState<string[]>([])

  const itemsPerPage = 1
  const totalSlides = Math.ceil(projetos.length / itemsPerPage)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const startIndex = currentIndex * itemsPerPage
  const currentProjects = projetos.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div
      id="experience"
      className="py-5 bg-[#252529] text-white rounded-md overflow-hidden"
    >
      <div className="mb-5 text-center">
        <h1 className="text-3xl md:text-3xl font-bold mb-2">Projetos</h1>
        <p className="text-lg text-gray-400">Destaques</p>
      </div>

      {/* Layout principal */}
      <div className="flex flex-col md:flex-row gap-15 max-w-6xl mx-auto px-1 items-center">
        {/* --- Carrossel --- */}
        <div className="relative w-2/3 flex items-center justify-center mx-3">
          {/* Wrapper com altura fixa */}
          <div className="w-full flex items-center justify-center overflow-hidden">
            <motion.div
              key={currentIndex}
              className="grid grid-cols-1 w-[600px]"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              {currentProjects.map(({ nome, src, href, descricao, tecnologias }, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => {
                    setDescricaoAtual(descricao)
                    setTecnologiasAtuais(tecnologias.split(',').map((t) => t.trim()))
                  }}
                  onMouseLeave={() => {
                    setDescricaoAtual('')
                    setTecnologiasAtuais([])
                  }}
                  className="flex items-center justify-center"
                >
                  <CardProjeto alt={nome} src={src} href={href} />
                </div>
              ))}
              <div className="flex justify-center mt-10 gap-2">
                {Array.from({ length: totalSlides }).map((_, idx) => (
                  <div
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
                      idx === currentIndex ? 'bg-white scale-110' : 'bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Botões alinhados verticalmente com os cards */}
          <button
            onClick={prevSlide}
            className="absolute left-[-1rem] md:left-[-2.5rem] bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 rounded-full transition cursor-pointer"
          >
            <ChevronLeft size={26} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-[-1rem] md:right-[-2.5rem] bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 rounded-full transition cursor-pointer"
          >
            <ChevronRight size={26} />
          </button>
        </div>

        {/* --- Painel de Descrição (ao lado) --- */}
        <div className="w-1/3 bg-[#1a1a1a] rounded-2xl p-6 shadow-lg border border-[#2a2a2a] h-[420px] flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-100">Descrição</h3>
            <p className="text-gray-400 text-sm leading-relaxed min-h-[100px]">
              {descricaoAtual || 'Passe o mouse sobre um projeto para ver a descrição.'}
            </p>

            <div>
              <h4 className="text-md font-semibold mt-2 text-gray-100">Tecnologias</h4>
              {tecnologiasAtuais.length > 0 ? (
                <ul className="text-gray-400 text-sm mt-2 list-disc list-inside space-y-1">
                  {tecnologiasAtuais.map((tec, idx) => (
                    <li key={idx}>{tec}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 text-sm mt-2">
                  Passe o cursor sobre um projeto
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
