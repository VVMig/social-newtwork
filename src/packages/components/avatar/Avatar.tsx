import React from 'react';

import { AvatarProps,Styled } from './styled';

export const Avatar = ({
  route,
  className,
  src,
  name,
  ...props
}: AvatarProps) => {
  return (
    <>
      {route ? (
        <Styled.Link to={route}>
          <Styled.Avatar {...props} className={`avatar ${className}`} src={src}>
            {!src && name && name[0]}
          </Styled.Avatar>
        </Styled.Link>
      ) : (
        <Styled.Avatar {...props} className={`avatar ${className}`} src={src}>
          {!src && name && name[0]}
        </Styled.Avatar>
      )}
    </>
  );
};
