interface Props {
    name: string
    type?: React.HTMLInputTypeAttribute
    placeholder?: string
    className?: string
    onChange: any
    value: string
}

export const Input = ({name, type= "text", onChange, placeholder, className, value}: Props) => {
  return (
    <label className={`${className} flex flex-col gap-3 md:w-3/4 text-white text-xl md:text-2xl font-semibold`}>
        {name}
        <input type={type} value={value} onChange={onChange} className='border bg-transparent rounded-3xl py-3 px-5 md:placeholder:text-2xl  placeholder:font-normal placeholder:text-white' placeholder={placeholder}/>
    </label>
  )
}
