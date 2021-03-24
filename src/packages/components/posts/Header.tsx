import { MoreHoriz } from '@material-ui/icons';
import React from 'react';
import { HeaderProps } from './interfaces';
import { Styled } from './styled';

export const Header = ({ title, subtitle, date }: HeaderProps) => {
  const day = new Date(date).toDateString().split(' ')[2];
  const month = new Date(date).toDateString().split(' ')[1];

  return (
    <Styled.Header>
      <Styled.Date>
        <Styled.DateSpan>{month}</Styled.DateSpan>
        <Styled.DateSpan color="#003393" fontSize="26px" weight="bold">
          {day}
        </Styled.DateSpan>
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
