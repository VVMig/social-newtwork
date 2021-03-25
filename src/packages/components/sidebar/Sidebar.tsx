import React from 'react';
import { SidebarProps } from './interfaces';
import { Styled } from './styled';

export const Sidebar: React.FC<SidebarProps> = ({
  children,
  maxWidth,
  align,
}) => {
  return (
    <Styled.Aside maxWidth={maxWidth} align={align}>
      {children}
    </Styled.Aside>
  );
};
