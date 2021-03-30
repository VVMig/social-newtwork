import React from 'react';
import { NavTab } from './NavTab';
import { TabProps } from './interfaces';
import { Styled } from './styled';

export const Navbar = ({ tabs }: TabProps) => {
  return (
    <Styled.Nav>
      {tabs.map((x, i) => (
        <Styled.Link to={x.route} key={i} title={x.title}>
          <NavTab>{x.component()}</NavTab>
        </Styled.Link>
      ))}
    </Styled.Nav>
  );
};
