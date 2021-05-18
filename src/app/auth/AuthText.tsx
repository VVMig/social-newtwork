import React from 'react';

import { Styled } from './styled';

interface Props {
  title: string;
  subtitle: string;
}

export const AuthText = ({ title, subtitle }: Props) => {
  return (
    <Styled.AuthText>
      <Styled.AuthTextTitle>
        <h2>{title}</h2>
      </Styled.AuthTextTitle>
      <Styled.AuthTextSubtitle>{subtitle}</Styled.AuthTextSubtitle>
    </Styled.AuthText>
  );
};
