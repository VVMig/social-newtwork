import React, { ButtonHTMLAttributes } from 'react';
import { Styled } from './styled';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  handler?: React.MouseEventHandler;
}

export const Button: React.FC<Props> = ({ handler, children, type }) => {
  return (
    <Styled.Btn onClick={handler} type={type}>
      {children}
    </Styled.Btn>
  );
};
