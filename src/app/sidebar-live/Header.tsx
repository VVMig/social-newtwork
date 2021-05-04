import { Styled } from './styled';
import {
  Name,
  Arrow,
  Avatar,
  Notifications,
  Menu,
  Item,
} from '../../packages/components';
import { Icon } from '../Icon';
import { IconType } from '../IconEnum';
import { store } from '../store';
import { clearNotifications, signOut } from '../helpers';
import React, { RefObject, useRef, useState } from 'react';
import { RoutesEnum } from '../routes/RoutesEnum';
import { observer } from 'mobx-react-lite';
import { NotificationsList } from './notificationsList/NotificationsList';
import { useOutsideClick } from '../hooks';

interface Props {
  icon: JSX.Element;
  showMenu: boolean;
  menuRef: RefObject<HTMLDivElement>;
  showMenuHandler?: React.MouseEventHandler;
}

export const Header = observer(
  ({ icon, showMenuHandler, showMenu, menuRef }: Props) => {
    const [notifications, setNotifications] = useState(false);
    const notifyRef = useRef<HTMLDivElement>(null);

    const closeNotifications = async () => {
      if (notifications) {
        await clearNotifications();
        store.user.resetNotifications();
      }
      setNotifications(false);
    };

    const notificationsHandler: React.MouseEventHandler = async () => {
      if (notifications) {
        await clearNotifications();
        store.user.resetNotifications();
      }
      setNotifications(!notifications);
    };

    const signOutHandler: React.MouseEventHandler = async () => {
      await signOut();
    };

    useOutsideClick(notifyRef, closeNotifications);

    const items: Item[] = [
      {
        title: 'profile',
        icon: <Icon type={IconType.User} />,
        link: `${RoutesEnum.Profile}/${store.user?._id}`,
      },
      {
        title: 'settings',
        icon: <Icon type={IconType.Settings} />,
      },
      {
        title: 'sign out',
        actionHandler: signOutHandler,
        icon: <Icon type={IconType.Exit} />,
      },
    ];

    return (
      <>
        <Styled.Header>
          <Styled.NotificationArea ref={notifyRef}>
            <Notifications
              icon={icon}
              notify={store.user.notifications.length > 0}
              clickHandler={notificationsHandler}
            />
            <NotificationsList show={notifications} />
          </Styled.NotificationArea>

          <Styled.MenuArea onClick={showMenuHandler} ref={menuRef}>
            <Avatar
              size={30}
              outline={showMenu}
              src={store.user.userAvatar}
              name={store.user.firstName}
            />
            <Name name={store.user.fullName || 'unknown'} />
            <Menu className="dropdown-menu" items={items} show={showMenu} />
            <Arrow open={showMenu} icon={<Icon type={IconType.Arrow} />} />
          </Styled.MenuArea>
        </Styled.Header>
      </>
    );
  }
);
