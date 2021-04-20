import React from 'react';
import { Styled } from './styled';

interface Props {
  likesNumber: number;
  isLiked?: boolean;
  actionHandler?: React.MouseEventHandler;
  icon: JSX.Element;
}

export const Likes = ({ likesNumber, isLiked, actionHandler, icon }: Props) => {
  return (
    <Styled.Likes onClick={actionHandler}>
      <Styled.LikeIcon isLiked={isLiked}>{icon}</Styled.LikeIcon>
      <Styled.Amount>{likesNumber}</Styled.Amount>
    </Styled.Likes>
  );
};
