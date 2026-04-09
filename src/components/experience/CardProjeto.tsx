import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
 
type PropsCardProjeto = {
  src: StaticImageData;
  href?: string;
  alt: string;
};
 
export default function CardProjeto({ src, href = '#', alt }: PropsCardProjeto) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full rounded-xl overflow-hidden border border-white/10 hover:border-green-500/60 transition-all duration-300"
    >
      <Image
        alt={alt}
        src={src}
        className="object-cover w-full transition-transform duration-500 group-hover:scale-105"
      />
 
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-lg font-semibold tracking-wide">{alt}</p>
        <span className="flex items-center gap-1.5 text-green-400 text-sm font-medium">
          <ExternalLink size={14} />
          Ver projeto
        </span>
      </div>
    </Link>
  );
}