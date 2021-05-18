import React from 'react';

import moment from 'moment';

import { Styled } from '../styled';

interface Props {
  name: string;
  online?: boolean;
  lastVisit?: number;
}

export const Header = ({ name, online, lastVisit }: Props) => {
  const realTime = () => {
    return moment(lastVisit).fromNow() === 'a few seconds ago'
      ? 'recently'
      : moment(lastVisit).fromNow();
  };

  return (
    <Styled.InfoHeader>
      <Styled.Name>{name || 'unknown'}</Styled.Name>
      <Styled.Status>{online ? 'online' : realTime()}</Styled.Status>
    </Styled.InfoHeader>
  );
};
