import React from 'react';

import { AuthText } from '../AuthText';
import { WelcomeProps } from '../interfaces';
import { Styled } from '../styled';

export const SignInText = ({ signIn }: WelcomeProps) => {
  return (
    <Styled.SignInText signIn={signIn}>
      <AuthText
        title="Welcome back!"
        subtitle="To keep connected with us please login with your personal info"
      />
    </Styled.SignInText>
  );
};
