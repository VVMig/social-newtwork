import React from 'react';
import styled from 'styled-components';
import { Navbar } from './Navbar';
import { TabProps } from './interfaces';

const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  background: #fff;
  display: flex;
  justify-content: center;
`;

export const Header = ({ tabs }: TabProps) => {
  return (
    <StyledHeader>
      <Navbar tabs={tabs} />
    </StyledHeader>
  );
};
