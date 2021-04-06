import React from 'react';
import { Styled } from './styled';
import { FormContainerProps } from './interfaces';
import { SignUpForm } from './signUp/SignUpForm';
import { SignInForm } from './signIn/SignInForm';

export const FormContainer = ({
  signIn,
  signInDelayed,
}: FormContainerProps) => {
  return (
    <Styled.FormContainer signIn={signIn}>
      {signInDelayed ? <SignInForm /> : <SignUpForm />}
    </Styled.FormContainer>
  );
};
