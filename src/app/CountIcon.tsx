import React from 'react';

import { observer } from 'mobx-react-lite';

import { Icon } from './Icon';
import { IconType } from './IconEnum';
import { store } from './store';
import { Styled } from './styled';

interface Props {
  type: IconType;
  title?: string;
}

export const CountIcon = observer(({ type, title }: Props) => {
  const maxDisplayMessages = 99;

  return (
    <Styled.CountIcon>
      <Icon type={type} title={title} />
      {store.user.unreadDialogs > 0 && (
        <Styled.Counter>
          {store.user.unreadDialogs > maxDisplayMessages
            ? ''
            : store.user.unreadDialogs}
        </Styled.Counter>
      )}
    </Styled.CountIcon>
  );
});
