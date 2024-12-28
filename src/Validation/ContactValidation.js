import * as Yup from 'yup'
export const contactValidation = Yup.object({
    name: Yup.string().required('name is required'),
    email: Yup.string().required("Email is required"),
    phone: Yup.string().required('* mobile_no is required').required("* Enter Your mobile_no").matches(/^\d{10}$/, "* mobile_no  should be of 10 digit"),

    query: Yup.string().required('Query It is an required field'),
    message: Yup.string().required("Please enter you message")
})

