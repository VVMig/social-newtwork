import { MoreHoriz } from '@material-ui/icons';
import React from 'react';
import { HeaderProps } from './interfaces';
import {
  Header as StyledHeader,
  Date,
  DateSpan,
  Title,
  Subtitle,
  More,
} from './Styled';

export const Header = ({ title, subtitle, day, month }: HeaderProps) => {
  return (
    <StyledHeader>
      <Date>
        <DateSpan>{month}</DateSpan>
        <DateSpan color="#003393" fontSize="26px" weight="bold">
          {day}
        </DateSpan>
      </Date>
      <Title>
        <h2>{title}</h2>
        <Subtitle>{subtitle}</Subtitle>
      </Title>
      <More>
        <MoreHoriz />
      </More>
    </StyledHeader>
  );
};
