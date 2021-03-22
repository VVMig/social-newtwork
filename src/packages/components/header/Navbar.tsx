import React from 'react';
import styled from 'styled-components';
import { PageIcon } from './PageIcon';
import { Link } from 'react-router-dom';
import { TabProps } from './interfaces';

const Nav = styled.nav`
  max-width: 465px;
  width: 100%;
  background-color: #f2f7fb;
  border-radius: 0 0 25px 25px;
  display: flex;
  padding: 0 40px;
  justify-content: space-between;
  align-items: center;
  color: #919497;
`;

const StyledLink = styled(Link)`
  color: inherit;
`;

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
