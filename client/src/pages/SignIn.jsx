import React, { useContext, useState } from 'react'
import { signInWithGoogle } from '../Firebase'
import googleLogo from '../assets/google_logo.svg'
import logo from '../assets/logo1.svg'
import { AppContext } from '../context/AppContext'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import TextField from '../components/TextField'
import { signInSchema } from '../utils/signSchema'
import { baseUrl } from '../utils/baseUrl'

function SignIn() {
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const { setUser, setIsLogged, login } = useContext(AppContext)
  const { values, handleChange, handleSubmit,touched, handleBlur, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInSchema,
    onSubmit: async (values, actions) => {
      const response = await baseUrl.post('/user/auth', values).catch(err=>{
        setError(err.response.data.msg)
        console.log(err.response.data.msg)
      })
      // console.log("response",await response.statusText)
      console.log(errors.password)

      const data = await response.data
      login(data.user.name, data.user.token)
      navigate('/')
    }
  })

  // login with google
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <TextField touched={touched.email} onBlur={handleBlur} errorMsg={errors.email} name={"email"} label={"Email"} value={values.email} onChange={handleChange} type={"email"} />
          <TextField touched={touched.password} onBlur={handleBlur} errorMsg={errors.password} name="password" label={"Password"} value={values.password} onChange={handleChange} type={"password"} />
          {error && <span className='text-red-500 text-sm italic'>{error}</span>}
          <div className='mt-4'>
            <div className='flex  flex-col-reverse gap-2'>
              <div className='flex gap-4'>
                <button type='submit' className='bg-button-color hover:bg-button-color px-5 py-2 text-white font-semibold rounded-lg'>
                  Sign In
                </button>
                <span onClick={handleSignIn} className="w-10 h-10 border rounded-lg cursor-pointer">
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
