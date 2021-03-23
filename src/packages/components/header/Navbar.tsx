import React from 'react';
import { PageIcon } from './PageIcon';
import { TabProps } from './interfaces';
import { StyledLink, Nav } from './Styled';

export const Navbar = ({ tabs }: TabProps) => {
  return (
    <Nav>
      {tabs.map((x, i) => (
        <StyledLink to={x.route} key={i} title={x.title}>
          <PageIcon>{x.component()}</PageIcon>
        </StyledLink>
      ))}
    </Nav>
  );
};
