import React from 'react';
import { Styled, AvatarProps } from './styled';

export const Avatar = ({ route, size, outline }: AvatarProps) => {
  return (
    <>
      {route ? (
        <Styled.Link to={route}>
          <Styled.Avatar size={size} outline={outline} />
        </Styled.Link>
      ) : (
        <Styled.Avatar size={size} outline={outline} />
      )}
    </>
  );
};
