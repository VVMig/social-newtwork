import React, { useState } from 'react';
import { Form } from './Form';
import { Styled } from './styled';
import { Welcome } from './Welcome';

export const Auth = () => {
  const [signin, setSignin] = useState(true);
  const [signInDelayed, setSignInDelayed] = useState(true);
  const delay = 500;

  const handleSwitch: React.MouseEventHandler = () => {
    setSignin(!signin);
    setTimeout(() => {
      setSignInDelayed(!signin);
    }, delay);
  };

  return (
    <Styled.Auth>
      <Styled.AuthContainer>
        <Form signin={signin} signInDelayed={signInDelayed} />
        <Welcome signin={signin} handler={handleSwitch} />
      </Styled.AuthContainer>
    </Styled.Auth>
  );
};
