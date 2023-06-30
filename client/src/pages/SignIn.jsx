import React, { useContext } from 'react'
import {signInWithGoogle} from '../Firebase'
import googleLogo from '../assets/google_logo.svg'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

function SignIn() {
  const navigate = useNavigate()
  const {setUser, setIsLogged} = useContext(AppContext)
  const handleSignIn = async () => {
    const data = await signInWithGoogle()
    setUser(data.displayName)
    setIsLogged(false)
    navigate("/chat")
    localStorage.setItem("user", data.displayName)
    localStorage.setItem("isLogged", true)
  }
  return (
    <div className='h-screen bg-gray-color flex items-center font-poppins'>
      <div className="max-w-sm rounded-lg h-[50vh] items-center flex flex-col gap-6 flex-1 bg-white shadow-lg mx-auto px-6 py-4">
        <div className='flex flex-col gap-4'>
          <h1 className="text-center text-xl font-bold text-head-color uppercase">Sign In</h1>
          <span className='text-gray-500 text-center text-sm'>Log In first with Google before accessing the chat</span>
        </div>
        <div className='lg:w-64 lg:h-64 w-48 h-48'>
          <img className='w-full h-full' src={googleLogo} alt="googlelogo" />
        </div>
        <button onClick={()=> handleSignIn()} className='bg-head-color w-full py-2 rounded-md text-gray-color font-semibold'>LogIn</button>
      </div>
    </div>
  )
}

export default SignIn
