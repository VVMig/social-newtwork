import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const logoSize = '30px';

const Div = styled.div`
  width: ${logoSize};
  height: ${logoSize};
  background-color: rgb(71, 105, 255);
  border-radius: 50%;
`;

export const Logo = () => {
  return (
    <Link to="#">
      <Div></Div>
    </Link>
  );
};
