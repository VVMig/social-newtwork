import React from 'react';
import { Styled } from './styled';
import { Info } from './info/Info';
import { Photos } from './photos/Photos';
import { Followers } from './followers/Followers';

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
