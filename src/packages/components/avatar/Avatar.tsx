import React from 'react';
import { Styled, AvatarProps } from './styled';

export const Avatar = ({ route, size }: AvatarProps) => {
  return (
    <>
      {route ? (
        <Styled.Link to={route}>
          <Styled.Avatar size={size} />
        </Styled.Link>
      ) : (
        <Styled.Avatar size={size} />
      )}
    </>
  );
};
