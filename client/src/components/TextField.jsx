import React from 'react'

const TextField = ({label, type,onChange,name, value, errorMsg, onBlur}) => {
  return (
    <div className='flex flex-col gap-1'>
      <label className='text-base text-[#2D3142] font-normal'>{label}</label>
      <input className={`outline-none py-2 px-3 border border-gray-300 rounded-lg`} name={name} type={type} value={value} onChange={onChange} onBlur={onBlur}/>
      {errorMsg && <span>{errorMsg}</span>}
    </div>
  )
}

export default TextField
