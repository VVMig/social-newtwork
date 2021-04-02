import React from 'react';
import { Styled } from './styled';

interface Props {
  handler?: React.MouseEventHandler;
}

export const Button: React.FC<Props> = ({ handler, children }) => {
  return <Styled.Btn onClick={handler}>{children}</Styled.Btn>;
};
