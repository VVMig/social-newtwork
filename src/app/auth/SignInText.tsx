import React from 'react';
import { WelcomeProps } from './interfaces';
import { Styled } from './styled';
import { AuthText } from './AuthText';

export const SignInText = ({ signin }: WelcomeProps) => {
  return (
    <Styled.SignInText signin={signin}>
      <AuthText
        title="Welcome back!"
        subtitle="Enter your personal details and start journey us"
      />
    </Styled.SignInText>
  );
};
