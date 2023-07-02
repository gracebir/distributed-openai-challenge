import * as yup from 'yup'

export const signInSchema = yup.object().shape({
    email: yup.string().email().required("this field is required"),
    password: yup.string().min(6).required("password is required")
})

export const signUpSchema = yup.object().shape({
    name: yup.string().required('this field is required'),
    email: yup.string().email().required('this field is required'),
    password: yup.string().min(6).required("password is required"),
    confirmPassword: yup.string().oneOf([yup.ref("password")]).required("required")
})