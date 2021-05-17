import React from 'react';

import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';

import { Icon } from '../../Icon';
import { IconType } from '../../IconEnum';
import { RoutesEnum } from '../../routes/RoutesEnum';
import { store } from '../../store';
import { Styled } from './styled';

interface Props {
  loading: boolean;
}

export const ChatHeader = observer(({ loading }: Props) => {
  const history = useHistory();

  const goBackHandler: React.MouseEventHandler = () => {
    history.goBack();
  };

  return (
    <Styled.ChatHeader>
      <Styled.GoBack>
        <Styled.GoBackLink onClick={goBackHandler}>
          <Icon type={IconType.CloseArrow} />
          Go back
        </Styled.GoBackLink>
      </Styled.GoBack>
      <Styled.ChatTitle>
        {!loading ? store.dialog.name : '...'}
      </Styled.ChatTitle>
      {!loading ? (
        <Styled.ChatAvatar
          route={`${RoutesEnum.Profile}/${store.dialog.userId}`}
          name={`${store.dialog.name}`}
          src={`${store.dialog.avatar}`}
        />
      ) : (
        <Styled.ChatAvatar />
      )}
    </Styled.ChatHeader>
  );
});
