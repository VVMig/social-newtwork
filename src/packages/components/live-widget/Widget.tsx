import React from 'react';
import { Styled } from './styled';
import { Stream } from './Stream';
import { Chat } from './Chat';
import { WidgetProps } from './interfaces';

export const Widget = ({ viewIcon }: WidgetProps) => {
  return (
    <Styled.Container>
      <Stream viewIcon={viewIcon} />
      <Chat />
    </Styled.Container>
  );
};
