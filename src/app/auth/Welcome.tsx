import React from 'react';
import { WelcomeProps } from './interfaces';
import { Styled } from './styled';
import { Button } from '../../packages/components';
import { SignInText } from './signIn/SignInText';
import { SignUpText } from './signUp/SignUpText';

export const Welcome = ({ signin, handler }: WelcomeProps) => {
  return (
    <>
      <Styled.SwitchContent signin={signin}>
        <SignInText signin={signin} />
        <Button handler={handler}>
          <Styled.SignUpBtnText signin={signin}>Sign up</Styled.SignUpBtnText>
          <Styled.SignInBtnText signin={signin}>Sign in</Styled.SignInBtnText>
        </Button>
        <SignUpText signin={signin} />
      </Styled.SwitchContent>
    </>
  );
};
