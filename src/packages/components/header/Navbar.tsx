import React from 'react';

import { TabProps } from './interfaces';
import { NavTab } from './NavTab';
import { Styled } from './styled';

export const Navbar = ({ tabs }: TabProps) => {
  return (
    <Styled.Nav>
      {tabs.map((x, i) => (
        <Styled.Link exact to={x.route} key={i} title={x.title}>
          <NavTab>{x.component()}</NavTab>
        </Styled.Link>
      ))}
    </Styled.Nav>
  );
};
