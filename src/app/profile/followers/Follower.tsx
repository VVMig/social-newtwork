import React from 'react';

import { FollowerFields } from '../interfaces';
import { Styled } from '../styled';

interface Props extends FollowerFields {
  closeModal?: React.MouseEventHandler;
}

export const Follower = ({ route, avatar, firstName, closeModal }: Props) => {
  return (
    <Styled.Friend to={route} onClick={closeModal}>
      <Styled.FriendAvatar src={avatar} name={firstName} />
      <Styled.FriendFirstName>{firstName}</Styled.FriendFirstName>
    </Styled.Friend>
  );
};
