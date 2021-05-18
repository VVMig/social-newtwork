import React, { ButtonHTMLAttributes } from 'react';

import { Styled } from './styled';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  clickHandler?: React.MouseEventHandler;
  className?: string;
}

export const Button: React.FC<Props> = ({
  clickHandler,
  children,
  className,
  ...props
}) => {
  return (
    <Styled.Btn onClick={clickHandler} {...props} className={className}>
      {children}
    </Styled.Btn>
  );
};
