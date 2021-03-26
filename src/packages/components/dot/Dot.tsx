import React from 'react';
import { FontSize, Styled } from './styled';

export const Dot = ({ fontSize }: FontSize) => {
  return <Styled.Dot fontSize={fontSize}>&bull;</Styled.Dot>;
};
