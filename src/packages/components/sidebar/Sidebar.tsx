import React from 'react';
import { Styled } from './styled';

export const Sidebar: React.FC = ({ children }) => {
  return <Styled.Aside>{children}</Styled.Aside>;
};
