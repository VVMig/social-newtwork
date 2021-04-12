import React from 'react';
import { Styled } from './styled';
import { Button } from '../../packages/components';
import { FormInputs } from './FormInputs';
import { FormProps } from './interfaces';
import { observer } from 'mobx-react-lite';
import { store } from '../store';

export const Form = observer(({ fields, signIn }: FormProps) => {
  return (
    <Styled.Form signin={signIn ? 1 : 0}>
      <Styled.FormTitle>
        <h2>{signIn ? 'Sign in to account' : 'Create account'}</h2>
      </Styled.FormTitle>
      <Styled.InputsContainer>
        <FormInputs fields={fields} />
      </Styled.InputsContainer>
      <Button type="submit" disabled={store.user.loading}>
        <Styled.BtnText>{signIn ? 'Sign in' : 'Sign up'}</Styled.BtnText>
      </Button>
    </Styled.Form>
  );
});
