import React from 'react';
import { Styled } from './styled';

export const Content: React.FC = ({ children }) => {
  return <Styled.SidebarContent>{children}</Styled.SidebarContent>;
};
