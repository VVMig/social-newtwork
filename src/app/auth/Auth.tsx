import React, { useState } from 'react';

import { observer } from 'mobx-react-lite';
import { Transition } from 'react-transition-group';

import { store } from '../store';
import { FormContainer } from './FormContainer';
import { Styled, switchVerificationDuration } from './styled';
import { Verification } from './verification/Verification';
import { Welcome } from './Welcome';

export const Auth = observer(() => {
  const [signIn, setsignIn] = useState(true);
  const [signInDelayed, setsignInDelayed] = useState(true);
  const delay = 500;

  const switchHandler: React.MouseEventHandler = () => {
    setsignIn(!signIn);
    setTimeout(() => {
      setsignInDelayed(!signIn);
    }, delay);
  };

  return (
    <Styled.Auth>
      <Styled.AuthContainer>
        <Transition
          in={store.isUserSet && !store.user?.verified}
          timeout={switchVerificationDuration}
          mountOnEnter
          unmountOnExit
        >
          {(state) => <Verification className={state} />}
        </Transition>

        <Transition
          in={!store.isUserSet}
          timeout={switchVerificationDuration}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <Styled.Main className={`${state}`}>
              <FormContainer signIn={signIn} signInDelayed={signInDelayed} />
              <Welcome signIn={signIn} switchHandler={switchHandler} />
            </Styled.Main>
          )}
        </Transition>
      </Styled.AuthContainer>
    </Styled.Auth>
  );
});
