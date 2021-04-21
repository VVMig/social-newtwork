import React from 'react';
import { Styled } from './styled';
import { Info } from './info/Info';
import { Photos } from './photos/Photos';
import { StatisticFields } from './info/interfaces';
import { ImageProps } from '../../packages/components';
import { Friends } from './friends/Friends';

interface Props {
  stats: StatisticFields[];
  photos: ImageProps[];
}

export const ProfileInfo = ({ stats, photos }: Props) => {
  return (
    <Styled.ProfileInfo>
      <Styled.ProfileInfoWrapper>
        <Info stats={stats} />
        <Photos photos={photos} />
        <Friends />
      </Styled.ProfileInfoWrapper>
    </Styled.ProfileInfo>
  );
};
