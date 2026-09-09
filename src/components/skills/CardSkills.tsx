import Image, { StaticImageData } from 'next/image';
 
type PropsCardSkills = {
  src: StaticImageData | any;
  alt: string;
};
 
export default function CardSkills({ src, alt }: PropsCardSkills) {
  return (
    <div
      className="
        group relative flex flex-col items-center justify-center gap-3
        p-5 rounded-2xl w-full
        border border-zinc-200/80 dark:border-zinc-800/80
        bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md
        hover:border-green-500/50 dark:hover:border-green-500/50
        shadow-sm hover:shadow-xl hover:shadow-green-500/10
        transition-all duration-300 cursor-default
        hover:-translate-y-1 active:scale-95
      "
    >
      <div className="absolute inset-0 rounded-2xl bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
     
      <span
        className="
          absolute top-3 right-3 w-1.5 h-1.5 rounded-full
          bg-zinc-200 dark:bg-zinc-800
          group-hover:bg-green-500 group-hover:shadow-[0_0_8px_rgba(34,197,94,0.8)]
          transition-all duration-300
        "
      />
      <div className="relative p-2 rounded-xl bg-zinc-100/50 dark:bg-zinc-800/40 border border-zinc-200/50 dark:border-zinc-700/30 group-hover:bg-green-500/10 group-hover:border-green-500/20 transition-all duration-300">
        <Image
          alt={alt}
          src={src}
          width={40}
          height={40}
          className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
    </div>
  );
}