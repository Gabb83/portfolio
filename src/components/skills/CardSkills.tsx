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
        p-5 rounded-xl w-full
        border border-gray-200 dark:border-zinc-700
        bg-white dark:bg-zinc-900
        hover:border-green-500 dark:hover:border-green-500
        transition-all duration-300 cursor-default
        hover:-translate-y-1
      "
    >
      {/* Dot decorativo no canto */}
      <span className="
        absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full
        bg-gray-200 dark:bg-zinc-700
        group-hover:bg-green-500
        transition-colors duration-300
      " />
 
      <Image
        alt={alt}
        src={src}
        width={48}
        height={48}
        className="transition-transform duration-300 group-hover:scale-110"
      />
 
      <p className="
        text-sm font-medium text-center capitalize
        text-gray-600 dark:text-gray-300
        group-hover:text-green-600 dark:group-hover:text-green-400
        transition-colors duration-300
      ">
        {alt}
      </p>
    </div>
  );
}