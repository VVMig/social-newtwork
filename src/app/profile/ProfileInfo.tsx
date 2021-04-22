import React from 'react';
import { Styled } from './styled';
import { Info } from './info/Info';
import { Photos } from './photos/Photos';
import { StatisticFields } from './interfaces';
import { ImageProps } from '../../packages/components';
import { Friends } from './friends/Friends';

interface Props {
  stats: StatisticFields[];
  photos: ImageProps[];
  name: string;
}

export const ProfileInfo = ({ stats, photos, name }: Props) => {
  return (
    <Styled.ProfileInfo>
      <Styled.ProfileInfoWrapper>
        <Info stats={stats} name={name} />
        <Photos photos={photos} />
        <Friends />
      </Styled.ProfileInfoWrapper>
    </Styled.ProfileInfo>
  );
};
