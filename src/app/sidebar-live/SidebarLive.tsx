import React, { RefObject } from 'react';

import { Sidebar } from '../../packages/components';
import { Content } from './Content';
import { Header } from './Header';
import { Styled } from './styled';

interface Props {
  viewIcon: JSX.Element;
  notifyIcon: JSX.Element;
  sendIcon: JSX.Element;
  showMenu: boolean;
  showMenuHandler?: React.MouseEventHandler;
  menuRef: RefObject<HTMLDivElement>;
  showSidebar: boolean;
  contentRef: RefObject<HTMLDivElement>;
}

export const SidebarLive = ({
  notifyIcon,
  showMenu,
  showMenuHandler,
  menuRef,
  showSidebar,
  contentRef,
}: Props) => {
  return (
    <Styled.SidebarContainer>
      <Sidebar showSidebar={showSidebar}>
        <Header
          icon={notifyIcon}
          showMenu={showMenu}
          showMenuHandler={showMenuHandler}
          menuRef={menuRef}
        />
        <Content contentRef={contentRef} />
      </Sidebar>
    </Styled.SidebarContainer>
  );
};
