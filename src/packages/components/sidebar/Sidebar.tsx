import React from 'react';
import { Styled, SidebarProps } from './styled';

export const Sidebar: React.FC<SidebarProps> = ({ children, maxWidth }) => {
  return <Styled.Aside maxWidth={maxWidth}>{children}</Styled.Aside>;
};
