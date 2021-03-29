import React from 'react';
import { Styled } from './styled';

interface Props {
  size: number;
  route: string;
}

export const Avatar = ({ route, size }: Props) => {
  return (
    <Styled.Link to={route}>
      <Styled.Avatar size={size}></Styled.Avatar>
    </Styled.Link>
  );
};
