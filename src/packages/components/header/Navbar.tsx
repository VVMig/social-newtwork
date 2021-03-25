import React from 'react';
import { PageIcon } from './PageIcon';
import { TabProps } from './interfaces';
import { Styled } from './styled';

export const Navbar = ({ tabs }: TabProps) => {
  return (
    <Styled.Nav>
      {tabs.map((x, i) => (
        <Styled.StyledLink
          activeClassName="active"
          to={x.route}
          key={i}
          title={x.title}
        >
          <PageIcon>{x.component()}</PageIcon>
        </Styled.StyledLink>
      ))}
    </Styled.Nav>
  );
};
