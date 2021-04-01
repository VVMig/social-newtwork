import React from 'react';
import { Styled } from './styled';
import { WelcomeContentProps } from './interfaces';

export const WelcomeContent = ({ title, subtitle }: WelcomeContentProps) => {
  return (
    <Styled.WelcomeContent>
      <Styled.WelcomeContentTitle>
        <h2>{title}</h2>
      </Styled.WelcomeContentTitle>
      <Styled.WelcomeContentText>{subtitle}</Styled.WelcomeContentText>
    </Styled.WelcomeContent>
  );
};
