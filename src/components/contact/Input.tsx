type PropsInput = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  label, name, value, onChange,
} : PropsInput){
  return(
    <input 
      name={name}
      value={value}
      onChange={onChange}
      placeholder={label}
      className='w-full h-[40px] border border-gray-600 rounded-sm p-2 hover:opacity-50 transition-all duration-300'
    />
  );
}