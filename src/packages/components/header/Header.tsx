import React from 'react';

import { TabProps } from './interfaces';
import { Navbar } from './Navbar';
import { Styled } from './styled';

export const Header = ({ tabs }: TabProps) => {
  return (
    <Styled.Header>
      <Navbar tabs={tabs} />
    </Styled.Header>
  );
};
