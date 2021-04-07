import React from 'react';
import { Styled } from './styled';
import { FormContainerProps } from './interfaces';
import { SignUpForm } from './signUp/SignUpForm';
import { SignInForm } from './signIn/SignInForm';
import { Spinner } from '../../packages/components';
import { user } from '../store/User';
import { observer } from 'mobx-react-lite';

export const FormContainer = observer(
  ({ signIn, signInDelayed }: FormContainerProps) => {
    return (
      <Styled.FormContainer signIn={signIn}>
        {user.loading && <Spinner />}
        {signInDelayed ? <SignInForm /> : <SignUpForm />}
      </Styled.FormContainer>
    );
  }
);
