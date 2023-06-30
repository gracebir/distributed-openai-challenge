import React, { useContext } from 'react'
import { signInWithGoogle } from '../Firebase'
import googleLogo from '../assets/google_logo.svg'
import logo from '../assets/logo1.svg'
import { AppContext } from '../context/AppContext'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import TextField from '../components/TextField'

function SignIn() {
  const navigate = useNavigate()
  const { setUser, setIsLogged } = useContext(AppContext)
  const { values, handleChange, handleBlur, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: () => {

    }
  })
  const handleSignIn = async () => {
    const data = await signInWithGoogle()
    setUser(data.displayName)
    setIsLogged(false)
    navigate("/chat")
    localStorage.setItem("user", data.displayName)
    localStorage.setItem("isLogged", true)
  }
  return (
    <div className='w-full h-screen flex items-center font-poppins'>
      <div className='max-w-xl mx-auto px-4 lg:px-0 flex-1 flex flex-col gap-6'>
        <div className='flex gap-2'>
          <img src={logo} alt="logo" />
          <div className='flex flex-col'>
            <span className='text-head-color text-lg font-semibold'>Elastic Team</span>
            <span className='text-sm font-semibold'>Open AI - Text Generator</span>
          </div>
        </div>
        <h3 className='font-semibold'>Please log in to continue</h3>
        <form className="flex flex-col gap-4">
          <TextField name={"email"} label={"Email"} value={values.email} onChange={handleChange} type={"email"} />
          <TextField name="password" label={"Password"} value={values.password} onChange={handleChange} type={"password"} />
          <div className='mt-4'>
            <div className='flex  flex-col-reverse gap-2'>
              <div className='flex gap-4'>
                <button className='bg-button-color hover:bg-button-color px-5 py-2 text-white font-semibold rounded-lg'>
                  Sign Up
                </button>
                <span className="w-10 h-10 border rounded-lg cursor-pointer">
                  <img className='w-full' src={googleLogo} alt="googlelogo" />
                </span>
              </div>
              <span className='text-sm'>Don't have an Account. <Link className='text-button-color underline' to={"/signup"}>Sign Up</Link></span>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn
