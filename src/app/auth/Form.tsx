import React from 'react';
import { Styled } from './styled';
import { Button } from '../../packages/components';
import { FormInputs } from './FormInputs';
import { FormProps } from './interfaces';

export const Form = ({ fields, signin }: FormProps) => {
  return (
    <Styled.Form signin={signin}>
      <Styled.FormTitle>
        <h2>{signin ? 'Sign in to account' : 'Create account'}</h2>
      </Styled.FormTitle>
      <Styled.InputsContainer>
        <FormInputs fields={fields} />
      </Styled.InputsContainer>
      <Button type="submit">
        <Styled.BtnText>{signin ? 'Sign in' : 'Sign up'}</Styled.BtnText>
      </Button>
    </Styled.Form>
  );
};
