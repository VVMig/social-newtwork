import React from 'react';

import { StatisticsProps } from '../interfaces';
import { Styled } from '../styled';
import { Statistic } from './Statistic';

export const Body = ({ stats }: StatisticsProps) => {
  return (
    <Styled.InfoStatistic>
      {stats.map((stat, i) => (
        <Statistic {...stat} border={i !== stats.length - 1} key={i} />
      ))}
    </Styled.InfoStatistic>
  );
};
