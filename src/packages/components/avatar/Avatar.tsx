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

  const avatar = (
    <Styled.Avatar {...props} className={className} src={src}>
      {!src && avatarLetter}
    </Styled.Avatar>
  );

  return <>{route ? <Styled.Link to={route}>{avatar}</Styled.Link> : avatar}</>;
};
