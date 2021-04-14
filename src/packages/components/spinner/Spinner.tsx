import React from 'react';
import { Styled } from './styled';

export const Spinner = () => {
  return (
    <Styled.Spinner className="spinner">
      <Styled.BounceLeft />
      <Styled.BounceMiddle />
      <Styled.BounceRight />
    </Styled.Spinner>
  );
};
