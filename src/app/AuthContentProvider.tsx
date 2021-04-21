import React, { useRef, useState } from 'react';
import { store } from './store';
import { SidebarInfo } from './sidebar-info/SidebarInfo';
import { SidebarLive } from './sidebar-live/SidebarLive';
import { Icon } from './Icon';
import { IconType } from './IconEnum';
import { friends } from './friends';
import { Header } from '../packages/components';
import { tabs } from './tabs';
import { Styled } from './styled';
import { useOutsideClick } from './hooks';

export const AuthContentProvider: React.FC = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  const showMenuHandler: React.MouseEventHandler = () => {
    setShowMenu(!showMenu);
  };

  const showSidebarHandler: React.MouseEventHandler = () => {
    setShowSidebar(!showSidebar);
  };

  const ref = useRef<HTMLDivElement>(null);

  const closeOutsideMenuHandler = () => {
    setShowMenu(false);
  };

  useOutsideClick(ref, closeOutsideMenuHandler);

  return (
    <>
      {store.user && store.user.verified ? (
        <Styled.Wrapper auth>
          <SidebarInfo
            friends={friends}
            showSidebarHandler={showSidebarHandler}
            showSidebar={showSidebar}
          />
          <SidebarLive
            viewIcon={<Icon type={IconType.Views} />}
            notifyIcon={<Icon type={IconType.Notifications} />}
            sendIcon={<Icon type={IconType.Send} />}
            showMenuHandler={showMenuHandler}
            showMenu={showMenu}
            menuRef={ref}
            showSidebar={showSidebar}
          />
          <Styled.Content auth>
            <Header tabs={tabs} />
            <Styled.ContentWidth sidebar={showSidebar}>
              {children}
            </Styled.ContentWidth>
          </Styled.Content>
        </Styled.Wrapper>
      ) : (
        <Styled.Wrapper common>
          <Styled.Content>
            <Styled.ContentWidth>{children}</Styled.ContentWidth>
          </Styled.Content>
        </Styled.Wrapper>
      )}
    </>
  );
};
