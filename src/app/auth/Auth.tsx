import React, { useState } from 'react';
import { FormContainer } from './FormContainer';
import { Styled, switchVerifyDuration } from './styled';
import { Welcome } from './Welcome';
import { Verify } from './verify/Verify';
import { observer } from 'mobx-react-lite';
import { user } from '../store/User';
import { Transition } from 'react-transition-group';

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
        <Transition
          in={user.isUserSet && !user.current.verified}
          timeout={switchVerifyDuration}
          mountOnEnter
          unmountOnExit
        >
          {(state) => <Verify className={state} />}
        </Transition>

        <Transition in={!user.isUserSet} timeout={switchVerifyDuration}>
          {(state) => (
            <Styled.Main className={`${state}`}>
              <FormContainer signIn={signIn} signInDelayed={signInDelayed} />
              <Welcome signIn={signIn} handler={handleSwitch} />
            </Styled.Main>
          )}
        </Transition>
      </Styled.AuthContainer>
    </Styled.Auth>
  );
});
