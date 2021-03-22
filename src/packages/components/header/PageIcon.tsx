import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border-radius: 7px;
  padding: 5px;
  display: flex;
  align-items: center;

  & svg {
    --size: 25px;
    width: var(--size);
    height: var(--size);
  }

  &:hover {
    background-color: #003393;
    color: #00f8ea;
    transition: 0.2s linear;
  }
`;

export const PageIcon: React.FC = ({ children }) => {
  return <Div className="page-icon">{children}</Div>;
};
