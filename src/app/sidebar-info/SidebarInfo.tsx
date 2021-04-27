import React from 'react';
import { Sidebar } from '../../packages/components';
import { Icon } from '../Icon';
import { IconType } from '../IconEnum';
import { Content } from './Content';
import { Header } from './Header';
import { Styled } from './styled';

interface Props {
  showSidebar: boolean;
  showSidebarHandler: React.MouseEventHandler;
}

export const SidebarInfo = ({ showSidebarHandler, showSidebar }: Props) => {
  return (
    <Styled.SidebarContainer>
      <Sidebar showSidebar={showSidebar}>
        <Header />
        <Content />
      </Sidebar>
      <Styled.SidebarToggler
        onClick={showSidebarHandler}
        showSidebar={showSidebar}
      >
        <Icon type={IconType.CloseArrow} />
      </Styled.SidebarToggler>
    </Styled.SidebarContainer>
  );
};
