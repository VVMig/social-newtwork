import React from 'react';
import { StyledUnderline } from './styled';
import { Props } from './interfaces';

export const Underline = ({ parentClass }: Props) => {
  return <StyledUnderline parentClass={parentClass}></StyledUnderline>;
};
