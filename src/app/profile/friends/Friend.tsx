import React from 'react';
import { FriendFields } from '../interfaces';
import { Styled } from '../styled';

interface Props extends FriendFields {
  closeModal?: React.MouseEventHandler;
}

export const Friend = ({ route, avatar, firstName, closeModal }: Props) => {
  return (
    <Styled.Friend to={route} onClick={closeModal}>
      <Styled.FriendAvatar src={avatar} />
      <Styled.FriendFirstName>{firstName}</Styled.FriendFirstName>
    </Styled.Friend>
  );
};
