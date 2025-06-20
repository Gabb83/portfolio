type PropsInput = {
  label: string;
}

export default function Input({
  label
} : PropsInput){
  return(
    <input 
      placeholder={label}
      className='h-[40px] border border-gray-600 rounded-sm p-2 hover:opacity-50 transition-all duration-300'
    />
  );
}