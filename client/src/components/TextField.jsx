import React from 'react'

const TextField = ({label, type,onChange,name, value, errorMsg,touched, onBlur}) => {
  return (
    <div className='flex flex-col gap-1'>
      <label className='text-base text-[#2D3142] font-normal'>{label}</label>
      <input className={`outline-none py-2 px-3 border ${errorMsg ? "border-red-400":"border-gray-300"} rounded-lg`} name={name} type={type} value={value} onChange={onChange} onBlur={onBlur}/>
      {errorMsg && touched && <span className='text-red-400 text-sm'>{errorMsg}</span>}
    </div>
  )
}

export default TextField
