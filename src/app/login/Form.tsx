import { Formik, FormikHelpers } from 'formik';
import React from 'react';
import { Styled } from './styled';
import { InputGroup } from '../../packages/components';
import { Icon } from '../Icon';
import { IconType } from '../IconEnum';
import * as yup from 'yup';
import { Values, FormProps } from './interfaces';

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
        <Styled.Form>
          <Styled.FormTitle>
            <h2>{signInDelayed ? 'Sign in to account' : 'Create account'}</h2>
          </Styled.FormTitle>
          <Styled.InputsContainer>
            {signInDelayed ? (
              <>
                <InputGroup
                  icon={<Icon type={IconType.Email} />}
                  name="email"
                  placeholder="email"
                />
                <InputGroup
                  icon={<Icon type={IconType.Lock} />}
                  name="password"
                  placeholder="password"
                />
              </>
            ) : (
              <>
                <InputGroup
                  icon={<Icon type={IconType.User} />}
                  name="firstName"
                  placeholder="First name"
                />
                <InputGroup
                  icon={<Icon type={IconType.User} />}
                  name="lastName"
                  placeholder="Last name"
                />
                <InputGroup
                  icon={<Icon type={IconType.Email} />}
                  name="email"
                  placeholder="email"
                />
                <InputGroup
                  icon={<Icon type={IconType.Lock} />}
                  name="password"
                  placeholder="password"
                />
              </>
            )}
          </Styled.InputsContainer>
          <Styled.SwitchBtn>
            <Styled.BtnText>
              {signInDelayed ? 'Sign in' : 'Sign up'}
            </Styled.BtnText>
          </Styled.SwitchBtn>
        </Styled.Form>
      </Formik>
    </Styled.FormContainer>
  );
};
