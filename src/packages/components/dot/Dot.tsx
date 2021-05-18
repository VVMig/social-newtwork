import React from 'react';

import { Styled } from './styled';

interface Props {
  className?: string;
}

export const Dot = ({ className }: Props) => {
  return <Styled.Dot className={className}>&bull;</Styled.Dot>;
};
