import React from 'react';
import { Styled } from './styled';

interface Props {
  type?: string;
  placeholder?: string;
  id?: string;
  name?: string;
}

export const Input = (props: Props) => {
  const { id, placeholder } = props;

  return (
    <Styled.InputGroup>
      <Styled.Input {...props}></Styled.Input>
      <Styled.Label htmlFor={id}>{placeholder}</Styled.Label>
    </Styled.InputGroup>
  );
};
