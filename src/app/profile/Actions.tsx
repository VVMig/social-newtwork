import React from 'react';
import { Styled } from './styled';

interface Props {
  isOwner: boolean;
  addPhotoModalHandler: React.MouseEventHandler;
  isFollowing: boolean;
  subscribeHandler: React.MouseEventHandler<Element>;
}

export const Actions = ({
  isOwner,
  addPhotoModalHandler,
  isFollowing,
  subscribeHandler,
}: Props) => {
  return (
    <Styled.Actions>
      {isOwner ? (
        <>
          <Styled.ColorActionButton>Profile settings</Styled.ColorActionButton>
          <Styled.ActionButton onClick={addPhotoModalHandler}>
            Add photo
          </Styled.ActionButton>
        </>
      ) : (
        <>
          <Styled.ColorActionButton onClick={subscribeHandler}>
            {isFollowing ? 'Unfollow' : 'Follow'}
          </Styled.ColorActionButton>
          <Styled.ActionButton>Chat</Styled.ActionButton>
        </>
      )}
    </Styled.Actions>
  );
};
