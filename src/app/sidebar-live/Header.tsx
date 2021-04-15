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
import { signOut } from '../helpers';
import React, { useState } from 'react';

interface Props {
  icon: JSX.Element;
}

export const Header = ({ icon }: Props) => {
  const [showMenu, setShowMenu] = useState(false);

  const signOutHandler: React.MouseEventHandler = async () => {
    await signOut();
  };

  const showMenuHandler: React.MouseEventHandler = () => {
    setShowMenu(!showMenu);
  };

  const items: Item[] = [
    {
      title: 'profile',
      icon: <Icon type={IconType.User} />,
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
        <Notifications icon={icon} notify />
        <Avatar size={30} route="#" />
        <Styled.MenuArea onClick={showMenuHandler}>
          <Name name={store.user?.fullName || 'unknown'} />
          <Arrow open={showMenu} icon={<Icon type={IconType.Arrow} />} />
          <Menu className="dropdown-menu" items={items} show={showMenu} />
        </Styled.MenuArea>
      </Styled.Header>
    </>
  );
};
