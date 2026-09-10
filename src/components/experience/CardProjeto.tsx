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
      className="group relative block w-full aspect-video rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 ease-out"
    >
      <Image
        alt={alt}
        src={src}
        fill
        quality={100}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1200px"
        className="object-cover object-top w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-transparent flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-300">
        <div className="flex items-end justify-between transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <div>
            <span className="text-[10px] uppercase tracking-wider font-semibold text-zinc-400">
              Projeto
            </span>
            <p className="text-white text-base font-semibold tracking-tight">
              {alt}
            </p>
          </div>

          <span className="inline-flex items-center justify-center p-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-all duration-300">
            <ExternalLink size={14} className="transition-transform duration-300 group-hover:scale-110" />
          </span>
        </div>
      </div>
    </Link>
  );
}