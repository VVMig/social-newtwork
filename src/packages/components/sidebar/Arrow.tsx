import React from 'react';
import { Styled } from './styled';

interface Props {
  icon: JSX.Element;
  className?: string;
  open: boolean;
  rotateDelay?: number;
}

export const Arrow = ({ icon, className, open, rotateDelay }: Props) => {
  const defaultDelay = 200;

  return (
    <Styled.Arrow
      className={className}
      open={open}
      delay={rotateDelay || defaultDelay}
    >
      {icon}
    </Styled.Arrow>
  );
};
