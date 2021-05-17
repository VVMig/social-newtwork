import React from 'react';

import { Button } from '../../packages/components';
import { WelcomeProps } from './interfaces';
import { SignInText } from './signIn/SignInText';
import { SignUpText } from './signUp/SignUpText';
import { Styled } from './styled';

export const Welcome = ({ signIn, switchHandler }: WelcomeProps) => {
  return (
    <>
      <Styled.SwitchContent signIn={signIn}>
        <SignInText signIn={signIn} />
        <Button clickHandler={switchHandler} disabled={false}>
          <Styled.SignUpBtnText signIn={signIn}>Sign up</Styled.SignUpBtnText>
          <Styled.SignInBtnText signIn={signIn}>Sign in</Styled.SignInBtnText>
        </Button>
        <SignUpText signIn={signIn} />
      </Styled.SwitchContent>
    </>
  );
};
