import * as yup from 'yup';

const passwordMinLength = 3;

export const shema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Second name is required'),
  email: yup
    .string()
    .email('Please enter correct email')
    .required('Email is required'),
  password: yup
    .string()
    .min(passwordMinLength, 'Must be at least 6 or more characters')
    .required('Password is required'),
});
