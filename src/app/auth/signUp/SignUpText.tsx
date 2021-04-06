import React from 'react';
import { WelcomeProps } from '../interfaces';
import { Styled } from '../styled';
import { AuthText } from '../AuthText';

export const SignUpText = ({ signIn }: WelcomeProps) => {
  return (
    <Styled.SignUpText signIn={signIn}>
      <AuthText
        title="Hello, friend!"
        subtitle="Enter your personal details and start journey us"
      />
    </Styled.SignUpText>
  );
};
