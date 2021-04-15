import React, { Dispatch, RefObject } from 'react';
import { Sidebar } from '../../packages/components';
import { Content } from './Content';
import { Header } from './Header';
import { Styled } from './styled';

interface Props {
  viewIcon: JSX.Element;
  notifyIcon: JSX.Element;
  sendIcon: JSX.Element;
  showMenu: boolean;
  setShowMenu: Dispatch<React.SetStateAction<boolean>>;
  menuRef: RefObject<HTMLDivElement>;
}

export const SidebarLive = ({
  viewIcon,
  notifyIcon,
  sendIcon,
  showMenu,
  setShowMenu,
  menuRef,
}: Props) => {
  return (
    <Styled.SidebarContainer>
      <Sidebar>
        <Header
          icon={notifyIcon}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          menuRef={menuRef}
        />
        <Content viewIcon={viewIcon} sendIcon={sendIcon} />
      </Sidebar>
    </Styled.SidebarContainer>
  );
};
