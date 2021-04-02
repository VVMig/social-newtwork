import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import { Styled } from './styled';
import * as yup from 'yup';
import { Values, FormProps } from './interfaces';
import { Button } from '../../packages/components';
import { SignInInputs } from './SignInInputs';
import { SignUpInputs } from './SignUpInputs';

const passwordMinLength = 3;

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

export const Form = ({ signIn, signInDelayed }: FormProps) => {
  return (
    <Styled.FormContainer signIn={signIn}>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        }}
        validationSchema={shema}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setSubmitting(false);
        }}
      >
        <Styled.Form signIn={signInDelayed}>
          <Styled.FormTitle>
            <h2>{signInDelayed ? 'Sign in to account' : 'Create account'}</h2>
          </Styled.FormTitle>
          <Styled.InputsContainer>
            {signInDelayed ? <SignInInputs /> : <SignUpInputs />}
          </Styled.InputsContainer>
          <Button>
            <Styled.BtnText>
              {signInDelayed ? 'Sign in' : 'Sign up'}
            </Styled.BtnText>
          </Button>
        </Styled.Form>
      </Formik>
    </Styled.FormContainer>
  );
};
