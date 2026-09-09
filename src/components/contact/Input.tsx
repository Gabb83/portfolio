type PropsInput = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  label, name, value, onChange,
}: PropsInput) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label htmlFor={name} className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
        {label}
      </label>
      <input 
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label}
        className="w-full h-11 rounded-xl border border-zinc-200 dark:border-zinc-800 
          bg-zinc-50/50 dark:bg-zinc-800/30 px-3.5 text-sm text-zinc-900 dark:text-white 
          placeholder:text-zinc-400 dark:placeholder:text-zinc-500 
          focus:outline-none focus:border-green-500 dark:focus:border-green-500 
          focus:ring-2 focus:ring-green-500/20 
          hover:border-zinc-300 dark:hover:border-zinc-700 
          transition-all duration-200"
      />
    </div>
  );
}