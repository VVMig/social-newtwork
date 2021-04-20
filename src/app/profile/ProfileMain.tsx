import React from 'react';
import { Styled } from './styled';
import { Actions } from './Actions';
import { ImageProps } from '../../packages/components';

interface Props {
  profilePhoto: ImageProps;
}

export const ProfileMain = ({ profilePhoto }: Props) => {
  return (
    <Styled.ProfileMain>
      <Styled.ProfilePhoto {...profilePhoto} />
      <Actions />
    </Styled.ProfileMain>
  );
};
