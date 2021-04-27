import React from 'react';
import { Styled } from './styled';

interface Props {
  isOwner: boolean;
  addPhotoModalHandler: React.MouseEventHandler;
  isFriend: boolean;
}

export const Actions = ({ isOwner, addPhotoModalHandler, isFriend }: Props) => {
  const subscribeHandler: React.MouseEventHandler = () => {
    console.log('click');
  };

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
            {isFriend ? 'Unsubscribe' : 'Subscribe'}
          </Styled.ColorActionButton>
          <Styled.ActionButton>Chat</Styled.ActionButton>
        </>
      )}
    </Styled.Actions>
  );
};
