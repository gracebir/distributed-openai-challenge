import React from 'react'
import { useFormik } from 'formik'
import TextField from '../components/TextField'
import { Link } from 'react-router-dom'
import logo from '../assets/logo1.svg'

function SignUp() {
    const { values, handleChange, handleBlur, errors } = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        onSubmit: () => {

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
                <form className="flex flex-col gap-4">
                    <TextField onBlur={handleBlur} name={"name"} label={"Name"} value={values.name} onChange={handleChange} type={"text"} />
                    <TextField onBlur={handleBlur} name={"email"} label={"Email"} value={values.email} onChange={handleChange} type={"email"} />
                    <TextField onBlur={handleBlur} name="password" label={"Password"} value={values.password} onChange={handleChange} type={"password"} />
                    <TextField onBlur={handleBlur} name="confirmPassword" label={"Confirm password"} value={values.confirmPassword} onChange={handleChange} type={"password"} />
                    <div className='flex justify-between items-end'>
                        <button className='bg-button-color hover:bg-button-color px-5 py-2 text-white font-semibold rounded-lg'>
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
