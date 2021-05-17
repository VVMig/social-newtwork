import React from 'react';

import { Followers } from './followers/Followers';
import { Info } from './info/Info';
import { Photos } from './photos/Photos';
import { Styled } from './styled';

export const ProfileInfo = () => {
  return (
    <Styled.ProfileInfo>
      <Styled.ProfileInfoWrapper>
        <Info />
        <Photos />
        <Followers />
      </Styled.ProfileInfoWrapper>
    </Styled.ProfileInfo>
  );
};
