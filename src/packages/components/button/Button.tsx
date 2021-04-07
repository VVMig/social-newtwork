import React, { ButtonHTMLAttributes } from 'react';
import { Styled } from './styled';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  handler?: React.MouseEventHandler;
}

export const Button: React.FC<Props> = ({ handler, children, ...props }) => {
  return (
    <Styled.Btn onClick={handler} {...props}>
      {children}
    </Styled.Btn>
  );
};
