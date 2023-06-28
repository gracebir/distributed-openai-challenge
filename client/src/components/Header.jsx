import React from 'react'
import logo from '../assets/logo1.svg'
function Header() {
  return (
    <header className='flex gap-4 items-center font-poppins py-4 px-4 bg-white border-b border-gray-color sticky right-0 w-full top-0 z-50'>
      <img className="lg:w-14 w-12" src={logo} alt="logo" />
      <div>
        <h3 className='text-head-color my-0 font-semibold lg:text-xl text-lg'>Elastic Team </h3>
        <p className="text-sm lg:text-base">Open AI - Text Generator</p>
      </div>
    </header>
  )
}

export default Header
