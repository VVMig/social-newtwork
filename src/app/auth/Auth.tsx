import React, { useState } from 'react';
import { FormContainer } from './FormContainer';
import { Styled, switchVerificationDuration } from './styled';
import { Welcome } from './Welcome';
import { Verification } from './verification/Verification';
import { observer } from 'mobx-react-lite';
import { store } from '../store';
import { Transition } from 'react-transition-group';

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

  console.log(store.user);

  return (
    <Styled.Auth>
      <Styled.AuthContainer>
        <Transition
          in={store.isUserSet && !store.user?.verified}
          timeout={switchVerificationDuration}
        >
          {(state) => <Verification className={state} />}
        </Transition>

        <Transition in={!store.isUserSet} timeout={switchVerificationDuration}>
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
