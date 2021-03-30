import React from 'react';
import { Link } from 'react-router-dom';
import { Styled } from './styled';

export const Logo = () => {
  return (
    <Link to="#">
      <Styled.StyledLogo></Styled.StyledLogo>
    </Link>
  );
};
