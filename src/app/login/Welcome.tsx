import { Formik, FormikHelpers } from 'formik';
import React, { useEffect, useState } from 'react';
import { Styled } from './styled';
import { InputGroup } from '../../packages/components';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthDate: string;
}

export const Welcome = () => {
  const [signIn, setSignIn] = useState<boolean>(true);
  const [switchToSignIn, setSwitchToSignIn] = useState<boolean>(signIn);
  const delay = 400;

  const handleSwitch = () => {
    setSignIn(!signIn);
    setTimeout(() => {
      setSwitchToSignIn(signIn);
    }, delay);
  };

  return (
    <Styled.WelcomeContainer>
      <Styled.FormContainer signIn={signIn}>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            birthDate: '',
          }}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setSubmitting(false);
            console.log(values);
          }}
        >
          <Styled.Form>
            <Styled.FormTitle>
              <h2>
                {switchToSignIn ? 'Sign in to account' : 'Create account'}
              </h2>
            </Styled.FormTitle>
            <Styled.InputsContainer>
              {switchToSignIn ? (
                <>
                  <InputGroup name="email" placeholder="email" />
                  <InputGroup name="password" placeholder="password" />
                </>
              ) : (
                <>
                  <InputGroup name="firstName" placeholder="firstName" />
                  <InputGroup name="lastName" placeholder="lastName" />
                  <InputGroup name="password" placeholder="password" />
                  <InputGroup name="email" placeholder="email" />
                </>
              )}
            </Styled.InputsContainer>
            <Styled.SwitchBtn>
              {switchToSignIn ? 'Sign in' : 'Sign up'}
            </Styled.SwitchBtn>
          </Styled.Form>
        </Formik>
      </Styled.FormContainer>
      <Styled.SwitchContent signIn={signIn}>
        <Styled.LeftContent signIn={signIn}>
          <Styled.CornerTitle>
            <h2>Welcome back!</h2>
          </Styled.CornerTitle>
          <Styled.CornerText>
            Enter your personal details and start journey us
          </Styled.CornerText>
        </Styled.LeftContent>
        <Styled.switchBtnContainer>
          <Styled.SwitchBtn onClick={handleSwitch}>
            <Styled.SignUpBtnText signIn={signIn}>Sign up</Styled.SignUpBtnText>
            <Styled.SignInBtnText signIn={signIn}>Sign in</Styled.SignInBtnText>
          </Styled.SwitchBtn>
        </Styled.switchBtnContainer>
        <Styled.RightContent signIn={signIn}>
          <Styled.CornerTitle>
            <h2>Hello, Friend!</h2>
          </Styled.CornerTitle>
          <Styled.CornerText>
            Enter your personal details and start journey us
          </Styled.CornerText>
        </Styled.RightContent>
      </Styled.SwitchContent>
    </Styled.WelcomeContainer>
  );
};
