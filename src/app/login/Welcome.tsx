import React from 'react';
import { WelcomeProps } from './interfaces';
import { Styled } from './styled';
import { Button } from '../../packages/components';
import { LeftText } from './LeftText';
import { RightText } from './RightText';

export const Welcome = ({ signIn, handler }: WelcomeProps) => {
  return (
    <>
      <Styled.SwitchContent signIn={signIn}>
        <LeftText signIn={signIn} />
        <Button handler={handler}>
          <Styled.SignUpBtnText signIn={signIn}>Sign up</Styled.SignUpBtnText>
          <Styled.SignInBtnText signIn={signIn}>Sign in</Styled.SignInBtnText>
        </Button>
        <RightText signIn={signIn} />
      </Styled.SwitchContent>
    </>
  );
};
