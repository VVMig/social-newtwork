import React from 'react';
import { Styled } from './styled';
import { Icon } from '../../Icon';
import { IconType } from '../../IconEnum';
import { useHistory } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { store } from '../../store';
import { RoutesEnum } from '../../routes/RoutesEnum';

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
