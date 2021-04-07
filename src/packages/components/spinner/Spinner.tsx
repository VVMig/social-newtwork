import React from 'react';
import { Styled } from './styled';

export const Spinner = () => {
  return (
    <Styled.Spinner className="spinner">
      <Styled.Bounce1 />
      <Styled.Bounce2 />
      <Styled.Bounce3 />
    </Styled.Spinner>
  );
};
