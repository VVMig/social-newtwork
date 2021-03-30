import React from 'react';
import { Navbar } from './Navbar';
import { TabProps } from './interfaces';
import { Styled } from './styled';

export const Header = ({ tabs }: TabProps) => {
  return (
    <Styled.Header>
      <Navbar tabs={tabs} />
    </Styled.Header>
  );
};
