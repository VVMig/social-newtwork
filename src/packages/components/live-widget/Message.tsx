import React from 'react';
import { MessageProps } from './interfaces';
import { Styled } from './styled';

export const Message = ({ text, displayName, date }: MessageProps) => {
  return (
    <Styled.Message>
      <Styled.MainInfo></Styled.MainInfo>
      <Styled.Time></Styled.Time>
    </Styled.Message>
  );
};
