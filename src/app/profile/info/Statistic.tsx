import React from 'react';
import { Styled } from '../styled';
import { StatisticFields } from '../interfaces';

interface Props extends StatisticFields {
  border?: boolean;
}

export const Statistic = ({ title, number, border }: Props) => {
  return (
    <Styled.Statistic border={border}>
      <Styled.StatisticHeader>{title}</Styled.StatisticHeader>
      <Styled.StatisticBody>{number}</Styled.StatisticBody>
    </Styled.Statistic>
  );
};
