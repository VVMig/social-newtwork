import React from 'react';

import { BodyProps } from './interfaces';
import { Styled } from './styled';

export const Body = ({ text }: BodyProps) => {
  return (
    <Styled.Body>
      <Styled.Text>{text}</Styled.Text>
    </Styled.Body>
  );
};
