import React from 'react';
import { Styled } from '../styled';

interface Props {
  name?: string;
  status?: string;
}

export const Header = ({ name, status }: Props) => {
  return (
    <Styled.InfoHeader>
      <Styled.Name>{name || 'unknown'}</Styled.Name>
      <Styled.Status>{status}</Styled.Status>
    </Styled.InfoHeader>
  );
};
