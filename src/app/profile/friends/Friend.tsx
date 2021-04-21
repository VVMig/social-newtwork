import React from 'react';
import { FriendFields } from '../../../packages/components';
import { Styled } from '../styled';

export const Friend = ({ route, avatar, firstName }: FriendFields) => {
  return (
    <Styled.Friend to={route}>
      <Styled.FriendAvatar src={avatar} />
      <Styled.FriendFirstName>{firstName}</Styled.FriendFirstName>
    </Styled.Friend>
  );
};
