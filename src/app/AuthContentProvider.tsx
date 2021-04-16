import React, { useRef, useState } from 'react';
import { store } from './store';
import { SidebarInfo } from './sidebar-info/SidebarInfo';
import { SidebarLive } from './sidebar-live/SidebarLive';
import { Icon } from './Icon';
import { IconType } from './IconEnum';
import { friends } from './friends';
import { groups } from './groups';
import { Header } from '../packages/components';
import { tabs } from './tabs';
import { Styled } from './styled';
import { useOutsideClick } from './hooks';

export const AuthContentProvider: React.FC = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler: React.MouseEventHandler = () => {
    setShowMenu(!showMenu);
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
          <SidebarInfo friends={friends} groups={groups} />
          <SidebarLive
            viewIcon={<Icon type={IconType.Views} />}
            notifyIcon={<Icon type={IconType.Notifications} />}
            sendIcon={<Icon type={IconType.Send} />}
            showMenuHandler={showMenuHandler}
            showMenu={showMenu}
            menuRef={ref}
          />
          <Styled.Content auth>
            <Header tabs={tabs} />
            {children}
          </Styled.Content>
        </Styled.Wrapper>
      ) : (
        <Styled.Wrapper>
          <Styled.Content>{children}</Styled.Content>
        </Styled.Wrapper>
      )}
    </>
  );
};
