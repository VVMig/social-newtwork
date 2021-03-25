import React from 'react';
import { Styled } from './styled';

export const Header: React.FC = ({ children }) => {
  return <Styled.SidebarHeader>{children}</Styled.SidebarHeader>;
};
