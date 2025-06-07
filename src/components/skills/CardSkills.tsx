import Image from 'next/image';

type PropsCardSkills = {
  src: any;
  alt: string;
}

export default function CardSkills({ src, alt }: PropsCardSkills) {
  return (
    <div className="shadow-md relative p-[2px] rounded-md bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 animate-border">
      <div className="flex flex-col items-center w-[280px] sm:w-[150px] h-full rounded-md p-4 sm:p-2 bg-[var(--card-bg-light)] dark:bg-[var(--card-bg-dark)] transition-colors duration-500">
        <Image
          alt={alt}
          src={src}
          width={55}
          height={55}
        />
        <p className="mt-2 font-medium">{alt}</p>
      </div>
    </div>
  );
}