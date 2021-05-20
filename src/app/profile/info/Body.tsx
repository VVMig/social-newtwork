import React from 'react';

import { StatisticsProps } from '../interfaces';
import { Styled } from '../styled';
import { Statistic } from './Statistic';

export const Body = ({ stats }: StatisticsProps) => {
  return (
    <Styled.InfoStatistic>
      {stats.map((stat, index) => (
        <Statistic {...stat} border={index !== stats.length - 1} key={index} />
      ))}
    </Styled.InfoStatistic>
  );
};
