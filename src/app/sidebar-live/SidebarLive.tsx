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
}

export const SidebarLive = ({
  viewIcon,
  notifyIcon,
  sendIcon,
  showMenu,
  showMenuHandler,
  menuRef,
}: Props) => {
  return (
    <Styled.SidebarContainer>
      <Sidebar>
        <Header
          icon={notifyIcon}
          showMenu={showMenu}
          showMenuHandler={showMenuHandler}
          menuRef={menuRef}
        />
        <Content viewIcon={viewIcon} sendIcon={sendIcon} />
      </Sidebar>
    </Styled.SidebarContainer>
  );
};
