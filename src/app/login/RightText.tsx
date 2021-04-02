import React from 'react';
import { WelcomeProps } from './interfaces';
import { Styled } from './styled';
import { AuthText } from './AuthText';

export const RightText = ({ signIn }: WelcomeProps) => {
  return (
    <Styled.RightText signIn={signIn}>
      <AuthText
        title="Hello, friend!"
        subtitle="Enter your personal details and start journey us"
      />
    </Styled.RightText>
  );
};
