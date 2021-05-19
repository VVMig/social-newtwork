import React from 'react';

import { Styled } from './styled';

interface Props {
  className?: string;
}

export const Spinner = ({ className }: Props) => {
  return (
    <Styled.Spinner className={className}>
      <Styled.BounceLeft />
      <Styled.BounceMiddle />
      <Styled.BounceRight />
    </Styled.Spinner>
  );
};
