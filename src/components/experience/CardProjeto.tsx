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
      className="group relative block w-full aspect-video rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 hover:border-green-500/60 dark:hover:border-green-500/60 shadow-md hover:shadow-xl hover:shadow-green-500/10 transition-all duration-500"
    >
      <Image
        alt={alt}
        src={src}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
        className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Overlay com gradiente moderno */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-300">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-white text-lg font-bold tracking-tight mb-1">
            {alt}
          </p>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-400 group-hover:text-green-300 transition-colors">
            <ExternalLink size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            Ver projeto ao vivo
          </span>
        </div>
      </div>
    </Link>
  );
}