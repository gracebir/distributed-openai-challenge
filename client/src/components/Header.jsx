import React, { useContext } from 'react'
import logo from '../assets/logo1.svg'
import {  useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
function Header() {
  const {logout} = useContext(AppContext)
  const navigate = useNavigate()
  const handleLogout = () => {
    logout()
    navigate('/login')
  }
  return (
    <header className='font-poppins flex items-center justify-between py-4 px-4 bg-white border-b border-gray-color sticky right-0 w-full top-0 z-50'>
      <div className='flex items-center gap-3 lg:gap-4'>
        <img className="lg:w-14 w-10" src={logo} alt="logo" />
        <div>
          <h3 className='text-head-color my-0 font-semibold lg:text-xl text-sm'>Elastic Team </h3>
          <p className="text-xs lg:text-base">Open AI - Text Generator</p>
        </div>
      </div>
      <button onClick={handleLogout} className='border border-gray-color px-4 py-2 rounded-2xl hover:border-head-color duration-200 hover:text-head-color font-inter text-sm'>Log out</button>
    </header>
  )
}

export default Header
