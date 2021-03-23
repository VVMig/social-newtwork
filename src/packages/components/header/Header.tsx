import React from 'react';
import { Navbar } from './Navbar';
import { TabProps } from './interfaces';
import { StyledHeader } from './Styled';

export const Header = ({ tabs }: TabProps) => {
  return (
    <StyledHeader>
      <Navbar tabs={tabs} />
    </StyledHeader>
  );
};
