import React, { useContext, useState } from 'react'
import { useFormik } from 'formik'
import TextField from '../components/TextField'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo1.svg'
import { signUpSchema } from '../utils/signSchema'
import { baseUrl } from '../utils/baseUrl'
import { AppContext } from '../context/AppContext'

function SignUp() {
    const {signup} = useContext(AppContext)
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const { values, handleChange, handleBlur, touched, handleSubmit, errors } = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: signUpSchema,
        validateOnBlur: true,
        onSubmit: async (values) => {
            const response = await baseUrl.post('/user', {
                name: values.name,
                email: values.email,
                password: values.password
            }).catch(err => {
                console.log(err.response)
                setError(err.response.data.msg)
            })
            const data = response.data
            signup(data.user.name, data.user.token)
            navigate('/')
        }
    })

    return (
        <div className='w-full h-screen flex items-center font-poppins'>
            <div className='max-w-xl mx-auto px-4 lg:px-0 flex-1 flex flex-col gap-6'>
                <div className='flex gap-2'>
                    <img src={logo} alt="logo" />
                    <div className='flex flex-col'>
                        <span className='text-head-color font-semibold'>Elastic Team</span>
                        <span className='text-sm font-semibold'>Open AI - Text Generator</span>
                    </div>
                </div>
                <h3 className='font-semibold'>Create an account here</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <TextField onBlur={handleBlur} errorMsg={errors.name} touched={touched.name} name={"name"} label={"Name"} value={values.name} onChange={handleChange} type={"text"} />
                    <TextField onBlur={handleBlur} errorMsg={errors.email} touched={touched.email} name={"email"} label={"Email"} value={values.email} onChange={handleChange} type={"email"} />
                    <TextField onBlur={handleBlur} errorMsg={errors.password} touched={touched.password} name="password" label={"Password"} value={values.password} onChange={handleChange} type={"password"} />
                    <TextField onBlur={handleBlur} errorMsg={errors.confirmPassword} touched={touched.confirmPassword} name="confirmPassword" label={"Confirm password"} value={values.confirmPassword} onChange={handleChange} type={"password"} />
                    {error && <span className='text-red-500 text-sm italic'>Oops! {error}</span>}
                    <div className='flex justify-between items-end'>
                        <button type='submit' className='bg-button-color hover:bg-button-color px-5 py-2 text-white font-semibold rounded-lg'>
                            Sign Up
                        </button>
                        <span className='text-sm'>Have an account. <Link className='text-button-color underline' to={"/"}>Login</Link></span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
