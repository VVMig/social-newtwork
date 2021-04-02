import React, { useState } from 'react';
import { Form } from './Form';
import { Styled } from './styled';
import { Welcome } from './Welcome';

export const Auth = () => {
  const [signIn, setSignIn] = useState<boolean>(true);
  const [signInDelayed, setSignInDelayed] = useState<boolean>(true);
  const delay = 500;

  const handleSwitch: React.MouseEventHandler = () => {
    setSignIn(!signIn);
    setTimeout(() => {
      setSignInDelayed(!signIn);
    }, delay);
  };

  return (
    <Styled.Auth>
      <Styled.AuthContainer>
        <Form signIn={signIn} signInDelayed={signInDelayed} />
        <Welcome signIn={signIn} handler={handleSwitch} />
      </Styled.AuthContainer>
    </Styled.Auth>
  );
};
