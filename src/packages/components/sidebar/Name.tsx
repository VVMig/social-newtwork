import React from 'react';

import { Styled } from './styled';

interface Props {
  name: string;
}

export const Name = ({ name }: Props) => {
  return <Styled.Name>{name}</Styled.Name>;
};
