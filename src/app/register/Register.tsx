import React from 'react';
import { Input } from '../../packages/components';
import { Styled } from './styled';

export const Register = () => {
  return (
    <Styled.Register>
      <Styled.Form>
        <Styled.Title>
          <h2>Login</h2>
        </Styled.Title>
        <Input type="email" placeholder="Email" />
        <Input type="text" placeholder="Password" />
      </Styled.Form>
    </Styled.Register>
  );
};
