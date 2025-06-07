import Image from 'next/image';
import Link from 'next/link';

type PropsCardProjeto = {
  src: any;
  href?: string;
  alt: string;
}

export default function PropsCardProjeto({
  src, href='#', alt
}: PropsCardProjeto){
  return(
    <div className='relative group w-full md:w-[370px] border border-green-500 rounded-sm overflow-hidden md:hover:w-[380px] transition-all duration-500 ease-in-out'>
      <Link
        href={href}
        target='_blank'
      >
        <Image
          alt={alt}
          src={src}
          className='object-cover'
        />
        <div className='absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out'>
          <p className='text-white text-lg font-semibold'>{alt}</p>
        </div>
      </Link>
    </div>
  );
}