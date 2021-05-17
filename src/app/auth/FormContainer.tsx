import React, { useState } from 'react';

import { observer } from 'mobx-react-lite';

import { Alert, Spinner } from '../../packages/components';
import { FormContainerProps } from './interfaces';
import { SignInForm } from './signIn/SignInForm';
import { SignUpForm } from './signUp/SignUpForm';
import { Styled } from './styled';

export const FormContainer = observer(
  ({ signIn, signInDelayed }: FormContainerProps) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const resetHandler = () => {
      setError('');
    };

    const startFetch = () => {
      setLoading(true);
      setError('');
    };

    const errorHandler = (message: string) => {
      setError(message);
    };

    const endFetch = () => {
      setLoading(false);
    };

    return (
      <Styled.FormContainer signIn={signIn}>
        {error && <Alert text={error} handleClose={resetHandler} />}
        {loading && <Spinner />}

        {signInDelayed ? (
          <SignInForm
            startFetch={startFetch}
            endFetch={endFetch}
            errorHandler={errorHandler}
          />
        ) : (
          <SignUpForm
            startFetch={startFetch}
            endFetch={endFetch}
            errorHandler={errorHandler}
          />
        )}
      </Styled.FormContainer>
    );
  }
);
