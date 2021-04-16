import React from 'react';
import { Styled } from './styled';
import { Actions } from './Actions';

export const LeftContent = () => {
  return (
    <Styled.LeftContent>
      <Styled.ProfilePhoto />
      <Actions />
    </Styled.LeftContent>
  );
};
