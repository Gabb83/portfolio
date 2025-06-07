import ImageProjetoPortfolio from '@/assets/image-projeto-portfolio.png';
import ImageProjetoJornadaenem from '@/assets/image-projeto-jornadaenem.png';
import ImageProjetoMedservefront from '@/assets/image-projeto-medservefront.png';
import ImageProjetoPokemonTCG from '@/assets/image-projeto-pokemontcg.png';

export const projetos = [
  {
    nome: 'portfólio',
    src: ImageProjetoPortfolio,
    href: '#',
    descricao: 'Site pessoal onde apresento meus projetos, tecnologias dominadas e trajetória como dev. Foco em UI limpa e navegação simples.',
    tecnologias: 'TypeScript, Next.js, React, Tailwind CSS'
  },
  {
    nome: 'jornada enem',
    src: ImageProjetoJornadaenem,
    href: 'https://jornada-enem.vercel.app/',
    descricao: 'Aplicação web voltada para estudantes em preparação para o ENEM. Oferece acesso público a provas anteriores, gabaritos, calculadora e cronômetro. Envio de redações e atividades está disponível exclusivamente para escolas parceiras.',
    tecnologias: 'TypeScript, Next.js, Nest.js, React, Tailwind CSS, Vercel'
  },
  {
    nome: 'medservefront',
    src: ImageProjetoMedservefront,
    href: '#',
    descricao: 'Plataforma web para gestão de clínicas médicas. Permite controle de pacientes, médicos e consultas, com interface responsiva e integração com API Java.',
    tecnologias: 'TypeScript, Next.js, React, Tailwind CSS'
  },
  {
    nome: 'pokemón tcg',
    src: ImageProjetoPokemonTCG,
    href: 'https://bucolic-croquembouche-57e631.netlify.app/',
    descricao: 'Aplicação responsiva que lista cartas do Pokémon TCG via API pública. Criado em 2 dias para processo seletivo, com foco em integração de dados e UI clara.',
    tecnologias: 'TypeScript, Next.js, React, Tailwind CSS, CSS, Netlify'
  }
];
