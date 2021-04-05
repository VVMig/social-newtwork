import React, { useState } from 'react';
import { FormContainer } from './FormContainer';
import { Styled } from './styled';
import { Welcome } from './Welcome';

export const Auth = () => {
  const [signin, setSignin] = useState(true);
  const [signinDelayed, setSigninDelayed] = useState(true);
  const delay = 500;

  const handleSwitch: React.MouseEventHandler = () => {
    setSignin(!signin);
    setTimeout(() => {
      setSigninDelayed(!signin);
    }, delay);
  };

  return (
    <Styled.Auth>
      <Styled.AuthContainer>
        <FormContainer signin={signin} signinDelayed={signinDelayed} />
        <Welcome signin={signin} handler={handleSwitch} />
      </Styled.AuthContainer>
    </Styled.Auth>
  );
};
