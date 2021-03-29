import React from 'react';
import { WidgetProps } from './interfaces';
import { Styled } from './styled';

export const StreamHeader = ({ viewIcon }: WidgetProps) => {
  return (
    <Styled.StreamHeader>
      <Styled.LiveStatus>Live</Styled.LiveStatus>
      <Styled.Views>{viewIcon} 3456</Styled.Views>
    </Styled.StreamHeader>
  );
};
