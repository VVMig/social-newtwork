import React from 'react';
import { Styled } from '../styled';
import { Statistic } from './Statistic';
import { StatisticsProps } from './interfaces';

export const Body = ({ stats }: StatisticsProps) => {
  return (
    <Styled.InfoStatistic>
      {stats.map((stat, i) => (
        <Statistic {...stat} border={i !== stats.length - 1} key={i} />
      ))}
    </Styled.InfoStatistic>
  );
};
