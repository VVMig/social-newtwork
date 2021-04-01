import React from 'react';
import { Styled } from './styled';
import { Field, Formik, FormikHelpers } from 'formik';
import { Welcome } from './Welcome';
import * as yup from 'yup';

const passwordMinLength = 6;

const shema = yup.object().shape({
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
  birthDate: yup.date().required(),
});

export const Login = () => {
  return (
    <Styled.Login>
      <Welcome />
    </Styled.Login>
  );
};
