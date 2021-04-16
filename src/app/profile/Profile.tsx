import React from 'react';
import { Styled } from './styled';
import { LeftContent } from './LeftContent';
import { RightContent } from './RightContent';

export const Profile = () => {
  return (
    <Styled.Profile>
      <LeftContent />
      <RightContent />
    </Styled.Profile>
  );
};
