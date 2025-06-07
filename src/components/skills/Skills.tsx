import IconHtml from '@/assets/icons/tech/icons8-html.svg';
import IconCss from '@/assets/icons/tech/icons8-css.svg';
import IconJs from '@/assets/icons/tech/icons8-javascript.svg';
import IconTs from '@/assets/icons/tech/icons8-typescript.svg';
import IconTail from '@/assets/icons/tech/icons8-tailwind-css.svg';
import IconBootstrap from '@/assets/icons/tech/icons8-bootstrap.svg';
import IconReact from '@/assets/icons/tech/icons8-reagir.svg';
import IconNext from '@/assets/icons/tech/icons8-nextjs.svg';
import CardSkills from './CardSkills';

const Techs = [
  {nome: 'html', src: IconHtml},
  {nome: 'css', src: IconCss},
  {nome: 'javascript', src: IconJs},
  {nome: 'typescript', src: IconTs},
  {nome: 'tailwind css', src: IconTail},
  {nome: 'bootstrap', src: IconBootstrap},
  {nome: 'reactjs', src: IconReact},
  {nome: 'nextjs', src: IconNext},
];

export default function Skills(){
  return(
    <div id='skills' className='py-[2rem]'>
      <h1 className='text-center text-[25px] font-[700] pb-7'>Skills</h1>
      <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 place-items-center place-content-center gap-5 sm:gap-7'>
        {Techs.map(({nome, src}, index) => (
          <CardSkills
            key={index}
            alt={nome}
            src={src}
          />
        ))}
      </div>
    </div>
  );
}