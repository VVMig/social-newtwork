import React from 'react';

import { FooterProps } from './interfaces';
import { Styled } from './styled';

export const Footer = ({ likes }: FooterProps) => {
  return (
    <Styled.Footer>
      <Styled.Like>🔥 {likes}</Styled.Like>
    </Styled.Footer>
  );
};
