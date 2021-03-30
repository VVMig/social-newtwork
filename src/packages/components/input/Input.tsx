import React from 'react';
import { Styled } from './styled';

interface Props {
  type: string;
  placeholder?: string;
}

export const Input = (props: Props) => {
  return (
    <Styled.Container>
      <Styled.Input {...props}></Styled.Input>
    </Styled.Container>
  );
};
