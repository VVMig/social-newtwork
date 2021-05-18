import React from 'react';

import { useHistory } from 'react-router-dom';

import { RoutesEnum } from '../routes/RoutesEnum';
import { Styled } from './styled';

interface Props {
  isOwner: boolean;
  addPhotoModalHandler: React.MouseEventHandler;
  isFollowing: boolean;
  subscribeHandler: React.MouseEventHandler<Element>;
  id: string;
}

export const Actions = ({
  isOwner,
  addPhotoModalHandler,
  isFollowing,
  subscribeHandler,
  id,
}: Props) => {
  const history = useHistory();

  const chatHandler: React.MouseEventHandler = () => {
    history.push(`${RoutesEnum.Messager}?userId=${id}`);
  };

  return (
    <Styled.Actions>
      {isOwner ? (
        <>
          <Styled.ActionButton onClick={addPhotoModalHandler}>
            Add photo
          </Styled.ActionButton>
        </>
      ) : (
        <>
          <Styled.ColorActionButton onClick={subscribeHandler}>
            {isFollowing ? 'Unfollow' : 'Follow'}
          </Styled.ColorActionButton>
          <Styled.ActionButton onClick={chatHandler}>Chat</Styled.ActionButton>
        </>
      )}
    </Styled.Actions>
  );
};
