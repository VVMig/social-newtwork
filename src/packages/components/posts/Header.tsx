import React from 'react';

import { HeaderProps } from './interfaces';
import { Styled } from './styled';

export const Header = ({ title, subtitle, date }: HeaderProps) => {
  const day = new Date(date).getDate();
  const month = new Date(date).toLocaleString('default', { month: 'short' });

  return (
    <Styled.Header>
      <Styled.Date>
        <Styled.DateSpan>{month}</Styled.DateSpan>
        <Styled.DateSpan day>{day}</Styled.DateSpan>
      </Styled.Date>
      <Styled.HeaderText>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Subtitle>{subtitle}</Styled.Subtitle>
      </Styled.HeaderText>
    </Styled.Header>
  );
};
