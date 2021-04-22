import React from 'react';
import { Styled } from './styled';

interface Props {
  isOwner: boolean;
  addPhotoModalHandler: React.MouseEventHandler;
}

export const Actions = ({ isOwner, addPhotoModalHandler }: Props) => {
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
          <Styled.ColorActionButton>Add friend</Styled.ColorActionButton>
          <Styled.ActionButton>Chat</Styled.ActionButton>
        </>
      )}
    </Styled.Actions>
  );
};
