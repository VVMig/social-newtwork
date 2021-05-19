import React from 'react';

import { FooterProps } from './interfaces';
import { Styled } from './styled';

export const Footer = ({ likes, author }: FooterProps) => {
  return (
    <Styled.Footer>
      <Styled.Author>
        <Styled.Name>{author}</Styled.Name>
      </Styled.Author>
      <Styled.Like>🔥 {likes}</Styled.Like>
    </Styled.Footer>
  );
};
