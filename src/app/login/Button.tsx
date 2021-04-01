import React from 'react';
import { WelcomeProps } from './interfaces';
import { Styled } from './styled';

export const Button = ({ handler, signIn }: WelcomeProps) => {
  return (
    <Styled.SwitchBtn onClick={handler}>
      <Styled.SignUpBtnText signIn={signIn}>Sign up</Styled.SignUpBtnText>
      <Styled.SignInBtnText signIn={signIn}>Sign in</Styled.SignInBtnText>
    </Styled.SwitchBtn>
  );
};
