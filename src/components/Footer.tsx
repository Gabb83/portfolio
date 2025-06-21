export default function Footer(){

  const anoAtual = new Date().getFullYear();
  return(
    <div className='flex flex-col md:flex-row items-center justify-center md:justify-end px-[100px] py-4'>
      <p className='text-[15px] text-center md:text-left'>Copyright © {anoAtual} - Todos os Diretos Reservados | Gabriel Evangelista</p>
    </div>
  );
}