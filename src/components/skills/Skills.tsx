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

import CardSkills from './CardSkills';
 
const Techs = [
  { nome: 'HTML', src: IconHtml },
  { nome: 'CSS', src: IconCss },
  { nome: 'JavaScript', src: IconJs },
  { nome: 'TypeScript', src: IconTs },
  { nome: 'Tailwind CSS', src: IconTail },
  { nome: 'Bootstrap', src: IconBootstrap },
  { nome: 'React', src: IconReact },
  { nome: 'Next.js', src: IconNext },
  {nome: 'Postgres', src: IconPostgres },
  {nome: 'Nest.js', src: IconNest },
];

{console.log('IconHtml:', IconHtml)}
 
export default function Skills() {
  return (
    <section id="skills" className="py-16">
      {/* Título */}
      <div className="text-center mb-12">
        <p className="text-xs font-semibold tracking-[0.2em] text-green-600 uppercase mb-2">
          O que eu uso
        </p>
        <h2 className="text-3xl font-bold">Skills</h2>
        <div className="w-10 h-[2px] bg-green-600 rounded-full mx-auto mt-3" />
      </div>        
 
      {/* Grid de cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto px-2">
        {Techs.map(({ nome, src }) => (
          <CardSkills key={nome} alt={nome} src={src} />
        ))}
      </div>
    </section>
  );
}