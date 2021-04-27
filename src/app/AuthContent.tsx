import React, { useEffect, useRef, useState } from 'react';
import { SidebarInfo } from './sidebar-info/SidebarInfo';
import { SidebarLive } from './sidebar-live/SidebarLive';
import { Icon } from './Icon';
import { IconType } from './IconEnum';
import { Header } from '../packages/components';
import { tabs } from './tabs';
import { Styled } from './styled';
import { useOutsideClick } from './hooks';
import useWebSocket from 'react-use-websocket';
import { wsUrl } from './url';
import { wsActions } from './wsreducer';

export const AuthContent: React.FC = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  useWebSocket(wsUrl);

  const { lastJsonMessage } = useWebSocket(wsUrl);

  useEffect(() => {
    lastJsonMessage && wsActions(lastJsonMessage);
  }, [lastJsonMessage]);

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
      <SidebarInfo
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
    </>
  );
};
