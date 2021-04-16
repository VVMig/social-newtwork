import React from 'react';
import { Styled } from './styled';
import { LeftContent } from './leftContent/LeftContent';
import { RightContent } from './rightContent/RightContent';

export const Profile = () => {
  return (
    <Styled.Profile>
      <LeftContent />
      <RightContent />
    </Styled.Profile>
  );
};
