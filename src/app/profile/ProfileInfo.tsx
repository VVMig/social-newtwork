import React from 'react';
import { Styled } from './styled';
import { Info } from './info/Info';
import { Photos } from './photos/Photos';
import { Friends } from './friends/Friends';

export const ProfileInfo = () => {
  return (
    <Styled.ProfileInfo>
      <Styled.ProfileInfoWrapper>
        <Info />
        <Photos />
        <Friends />
      </Styled.ProfileInfoWrapper>
    </Styled.ProfileInfo>
  );
};
