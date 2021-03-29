import React from 'react';
import { Styled } from './styled';
import { StreamHeader } from './StreamHeader';
import { WidgetProps } from './interfaces';

export const Stream = ({ viewIcon }: WidgetProps) => {
  return (
    <Styled.Stream>
      <StreamHeader viewIcon={viewIcon} />
    </Styled.Stream>
  );
};
