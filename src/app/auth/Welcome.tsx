import React from 'react';
import { WelcomeProps } from './interfaces';
import { Styled } from './styled';
import { Button } from '../../packages/components';
import { SignInText } from './signIn/SignInText';
import { SignUpText } from './signUp/SignUpText';
import { observer } from 'mobx-react-lite';
import { store } from '../store';

export const Welcome = observer(({ signIn, handler }: WelcomeProps) => {
  return (
    <>
      <Styled.SwitchContent signIn={signIn}>
        <SignInText signIn={signIn} />
        <Button handler={handler} disabled={store.user.loading}>
          <Styled.SignUpBtnText signIn={signIn}>Sign up</Styled.SignUpBtnText>
          <Styled.SignInBtnText signIn={signIn}>Sign in</Styled.SignInBtnText>
        </Button>
        <SignUpText signIn={signIn} />
      </Styled.SwitchContent>
    </>
  );
});
