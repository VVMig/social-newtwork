import React, { RefObject } from 'react';

import { observer } from 'mobx-react-lite';

import { Avatar, Menu } from '../../../packages/components';
import { RoutesEnum } from '../../routes/RoutesEnum';
import { store } from '../../store';
import { Styled } from '../styled';

interface Props {
  show: boolean;
  notifyRef?: RefObject<HTMLDivElement>;
}

export const NotificationsList = observer(({ show, notifyRef }: Props) => {
  return (
    <Styled.NotificationsList ref={notifyRef}>
      <Menu
        show={show}
        items={store.user.notifications
          .map((item) => ({
            title: item.notifyMessage,
            link: `${RoutesEnum.Profile}/${item.from._id}`,
            icon: (
              <Avatar
                src={item.userAvatar}
                size={20}
                name={item.from.firstName}
              />
            ),
          }))
          .reverse()}
        className={'dropdown-notifications'}
      />
    </Styled.NotificationsList>
  );
});
