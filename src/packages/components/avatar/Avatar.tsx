import React from 'react';
import { Styled, AvatarProps } from './styled';

export const Avatar = ({ route, className, ...props }: AvatarProps) => {
  return (
    <>
      {route ? (
        <Styled.Link to={route}>
          <Styled.Avatar {...props} className={`avatar ${className}`} />
        </Styled.Link>
      ) : (
        <Styled.Avatar {...props} className={`avatar ${className}`} />
      )}
    </>
  );
};
