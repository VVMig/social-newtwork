import * as yup from 'yup';

const passwordMinLength = 6;

export const signUpShema = yup.object().shape({
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

export const signInShema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter correct email')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
});
