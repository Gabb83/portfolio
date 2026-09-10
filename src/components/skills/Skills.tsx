import IconHtml from '@/assets/icons/tech/icons8-html.svg';
import IconCss from '@/assets/icons/tech/icons8-css.svg';
import IconJs from '@/assets/icons/tech/icons8-javascript.svg';
import IconTs from '@/assets/icons/tech/icons8-typescript.svg';
import IconTail from '@/assets/icons/tech/icons8-tailwind-css.svg';
import IconBootstrap from '@/assets/icons/tech/icons8-bootstrap.svg';
import IconReact from '@/assets/icons/tech/icons8-reagir.svg';
import IconNext from '@/assets/icons/tech/icons8-nextjs.svg';
import IconPostgres from '@/assets/icons/tech/postgresql-icon.svg';
import IconNest from '@/assets/icons/tech/icons-nest.svg';
import IconAngular from '@/assets/icons/tech/angular-icon-svgrepo-com.svg';

import CardSkills from './CardSkills';

// svg disponível em: https://www.svgrepo.com/vectors/docker/

const Techs = [
  // { nome: 'HTML', src: IconHtml },
  // { nome: 'CSS', src: IconCss },
  { nome: 'JavaScript', src: IconJs },
  { nome: 'TypeScript', src: IconTs },
  // { nome: 'Bootstrap', src: IconBootstrap },
  
  { nome: 'React', src: IconReact },
  { nome: 'Next.js', src: IconNext },
  { nome: 'Angular', src: IconAngular },
  { nome: 'Tailwind CSS', src: IconTail },
  
  { nome: 'Nest.js', src: IconNest },
  { nome: 'Postgres', src: IconPostgres },
];
 
export default function Skills() {
  return (
    <section id="skills" className="relative py-20 px-0">
      {/* Glow Effect de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-green-500/10 dark:bg-green-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Título */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-xs font-semibold mb-3">
          <span>O que eu uso</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Habilidades & Tecnologias
        </h2>
        <div className="w-12 h-[2.5px] bg-gradient-to-r from-green-500 to-emerald-400 rounded-full mx-auto mt-4" />
      </div>

      {/* Grid de cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mx-auto px-0 lg:px-30">
        {Techs.map(({ nome, src }) => (
          <div
            key={nome}
            className="group relative flex flex-col items-center justify-center p-5 rounded-2xl bg-white/70 dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-md shadow-sm hover:shadow-xl hover:shadow-green-500/10 hover:border-green-500/50 dark:hover:border-green-500/50 hover:-translate-y-1 active:scale-95 transition-all duration-300"
          >
            <CardSkills alt={nome} src={src} />
            <span className="mt-3 text-xs font-semibold text-zinc-600 dark:text-zinc-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-200">
              {nome}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}