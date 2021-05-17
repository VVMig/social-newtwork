import React from 'react';

import { StatisticFields } from '../interfaces';
import { Styled } from '../styled';

interface Props extends StatisticFields {
  border?: boolean;
}

export const Statistic = ({ title, amount, border }: Props) => {
  return (
    <Styled.Statistic border={border}>
      <Styled.StatisticHeader>{title}</Styled.StatisticHeader>
      <Styled.StatisticBody>{amount}</Styled.StatisticBody>
    </Styled.Statistic>
  );
};
