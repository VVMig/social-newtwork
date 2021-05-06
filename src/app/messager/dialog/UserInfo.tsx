import React from 'react';
import { Styled } from './styled';

export const UserInfo = () => {
  return (
    <Styled.UserInfo>
      <Styled.Avatar />
      <Styled.DialogName>
        <Styled.UserName></Styled.UserName>
        <Styled.LastMessage></Styled.LastMessage>
      </Styled.DialogName>
    </Styled.UserInfo>
  );
};
