import React from 'react';
import { Styled } from './styled';

interface Props {
  icon: JSX.Element;
}

export const Arrow = ({ icon }: Props) => {
  return <Styled.Arrow>{icon}</Styled.Arrow>;
};
