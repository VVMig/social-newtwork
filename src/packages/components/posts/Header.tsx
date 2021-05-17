import React from 'react';

import { MoreHoriz } from '@material-ui/icons';

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
      <Styled.Title>
        <h2>{title}</h2>
        <Styled.Subtitle>{subtitle}</Styled.Subtitle>
      </Styled.Title>
      <Styled.More>
        <MoreHoriz />
      </Styled.More>
    </Styled.Header>
  );
};
