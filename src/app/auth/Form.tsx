import React from 'react';

import { observer } from 'mobx-react-lite';

import { Button } from '../../packages/components';
import { FormInputs } from './FormInputs';
import { FormProps } from './interfaces';
import { Styled } from './styled';

export const Form = observer(({ fields, signIn, loading }: FormProps) => {
  return (
    <Styled.FormikForm>
      <Styled.Form signIn={signIn}>
        <Styled.FormTitle>
          <h2>{signIn ? 'Sign in to account' : 'Create account'}</h2>
        </Styled.FormTitle>
        <Styled.InputsContainer>
          <FormInputs fields={fields} />
        </Styled.InputsContainer>
        <Button type="submit" disabled={loading}>
          <Styled.BtnText>{signIn ? 'Sign in' : 'Sign up'}</Styled.BtnText>
        </Button>
      </Styled.Form>
    </Styled.FormikForm>
  );
});
