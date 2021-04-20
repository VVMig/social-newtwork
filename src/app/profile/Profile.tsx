import React from 'react';
import { Styled } from './styled';
import { ProfileMain } from './ProfileMain';
import { ProfileInfo } from './ProfileInfo';
import { photos } from '../photos';
import { stats } from '../stats';

export const Profile = () => {
  return (
    <Styled.Profile>
      <ProfileMain profilePhoto={photos[0]} />
      <ProfileInfo stats={stats} photos={photos} />
    </Styled.Profile>
  );
};
