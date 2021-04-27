import React, { ButtonHTMLAttributes } from 'react';
import { Styled } from './styled';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  clickHandler?: React.MouseEventHandler;
}

export const Button: React.FC<Props> = ({
  clickHandler,
  children,
  ...props
}) => {
  return (
    <Styled.Btn onClick={clickHandler} {...props}>
      {children}
    </Styled.Btn>
  );
};
