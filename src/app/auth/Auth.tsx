import React, { useState } from 'react';
import { FormContainer } from './FormContainer';
import { Styled } from './styled';
import { Welcome } from './Welcome';
import { Verify } from './verify/Verify';
import { observer } from 'mobx-react-lite';
import { user } from '../store/User';

export const Auth = observer(() => {
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
        {user.isUserSet && !user.current.verified ? (
          <Verify />
        ) : (
          <Styled.Main>
            <FormContainer signIn={signIn} signInDelayed={signInDelayed} />
            <Welcome signIn={signIn} handler={handleSwitch} />
          </Styled.Main>
        )}
      </Styled.AuthContainer>
    </Styled.Auth>
  );
});
