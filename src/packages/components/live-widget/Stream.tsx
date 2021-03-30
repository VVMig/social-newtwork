import React from 'react';
import { Styled } from './styled';
import { StreamHeader } from './StreamHeader';
import { StreamHeaderProps } from './interfaces';

export const Stream = ({ viewIcon }: StreamHeaderProps) => {
  return (
    <Styled.Stream>
      <StreamHeader viewIcon={viewIcon} />
    </Styled.Stream>
  );
};
