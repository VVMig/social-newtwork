import React from 'react';
import { Styled } from './styled';
import { FormContainerProps } from './interfaces';
import { SignUpForm } from './SignUpForm';
import { SignInForm } from './SignInForm';

export const FormContainer = ({
  signin,
  signinDelayed,
}: FormContainerProps) => {
  return (
    <Styled.FormContainer signin={signin}>
      {signinDelayed ? <SignInForm /> : <SignUpForm />}
    </Styled.FormContainer>
  );
};
