import React, { useState } from 'react';
import { FormContainer } from './FormContainer';
import { Styled } from './styled';
import { Welcome } from './Welcome';

export const Auth = () => {
  const [signIn, setsignIn] = useState(true);
  const [signInDelayed, setsignInDelayed] = useState(true);
  const delay = 500;

  const handleSwitch: React.MouseEventHandler = () => {
    setsignIn(!signIn);
    setTimeout(() => {
      setsignInDelayed(!signIn);
    }, delay);
  };

  return (
    <Styled.Auth>
      <Styled.AuthContainer>
        <FormContainer signIn={signIn} signInDelayed={signInDelayed} />
        <Welcome signIn={signIn} handler={handleSwitch} />
      </Styled.AuthContainer>
    </Styled.Auth>
  );
};
