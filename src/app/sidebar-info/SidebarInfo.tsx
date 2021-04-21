import React from 'react';
import { Sidebar } from '../../packages/components';
import { Icon } from '../Icon';
import { IconType } from '../IconEnum';
import { Content } from './Content';
import { Header } from './Header';
import { SidebarItems } from './interfaces';
import { Styled } from './styled';

interface Props extends SidebarItems {
  showSidebar: boolean;
  showSidebarHandler: React.MouseEventHandler;
}

export const SidebarInfo = ({
  friends,
  showSidebarHandler,
  showSidebar,
}: Props) => {
  return (
    <Styled.SidebarContainer>
      <Sidebar showSidebar={showSidebar}>
        <Header />
        <Content friends={friends} />
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
