import React from 'react';

import { ImageActionsProps } from '../interfaces';
import { Styled } from '../styled';

export const Actions: React.FC<ImageActionsProps> = ({
  deleteHandler,
  setAvatarAction,
}) => {
  return (
    <Styled.Actions>
      <Styled.SetAvatarButton onClick={setAvatarAction}>
        Set as profile image
      </Styled.SetAvatarButton>
      <Styled.DeleteButton onClick={deleteHandler}>Delete</Styled.DeleteButton>
    </Styled.Actions>
  );
};
