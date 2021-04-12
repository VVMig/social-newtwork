import React from 'react';
import { Styled } from './styled';
import { FormContainerProps } from './interfaces';
import { SignUpForm } from './signUp/SignUpForm';
import { SignInForm } from './signIn/SignInForm';
import { Alert, Spinner } from '../../packages/components';
import { store } from '../store';
import { observer } from 'mobx-react-lite';

export const FormContainer = observer(
  ({ signIn, signInDelayed }: FormContainerProps) => {
    const resetHandler = () => {
      store.user.resetError();
    };

    return (
      <Styled.FormContainer signIn={signIn}>
        {store.user.error && (
          <Alert text={store.user.error} closeFunc={resetHandler} />
        )}
        {store.user.loading && <Spinner />}

        {signInDelayed ? <SignInForm /> : <SignUpForm />}
      </Styled.FormContainer>
    );
  }
);
