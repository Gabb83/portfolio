import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

type PropsRedesSociais = {
  href: string;
  src: StaticImageData;
  alt: string;
}

export default function RedesSociais({
href, src, alt
}: PropsRedesSociais){
  return(
    <Link 
      href={href} 
      target='_blank'
      className='bg-white border border-green-500 rounded-full p-1'
    >
      <Image
        alt={alt}
        src={src}
        width={35} height={35}
      />
    </Link>
  );
}