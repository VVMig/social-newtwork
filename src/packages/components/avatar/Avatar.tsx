import React from 'react';

import { AvatarProps } from './interfaces';
import { Styled } from './styled';

export const Avatar = ({
  route,
  className,
  src,
  name,
  ...props
}: AvatarProps) => {
  const avatarLetter = name?.substr(0, 1) || '';

  return (
    <>
      {route ? (
        <Styled.Link to={route}>
          <Styled.Avatar {...props} className={className} src={src}>
            {!src && avatarLetter}
          </Styled.Avatar>
        </Styled.Link>
      ) : (
        <Styled.Avatar {...props} className={className} src={src}>
          {!src && avatarLetter}
        </Styled.Avatar>
      )}
    </>
  );
};
