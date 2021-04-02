import React from 'react';
import { WelcomeProps } from './interfaces';
import { Styled } from './styled';
import { AuthText } from './AuthText';

export const LeftText = ({ signIn }: WelcomeProps) => {
  return (
    <Styled.LeftText signIn={signIn}>
      <AuthText
        title="Welcome back!"
        subtitle="Enter your personal details and start journey us"
      />
    </Styled.LeftText>
  );
};
