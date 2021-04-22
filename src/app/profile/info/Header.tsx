import React from 'react';
import { Styled } from '../styled';

interface Props {
  name?: string;
}

export const Header = ({ name }: Props) => {
  return (
    <Styled.InfoHeader>
      <Styled.Name>{name || 'unknown'}</Styled.Name>
    </Styled.InfoHeader>
  );
};
