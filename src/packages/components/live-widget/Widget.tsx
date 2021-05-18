import React from 'react';

import { Chat } from './Chat';
import { WidgetProps } from './interfaces';
import { Stream } from './Stream';
import { Styled } from './styled';

export const Widget = ({ viewIcon, sendIcon }: WidgetProps) => {
  return (
    <Styled.Container>
      <Stream viewIcon={viewIcon} />
      <Chat sendIcon={sendIcon} />
    </Styled.Container>
  );
};
