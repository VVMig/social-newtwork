import React from 'react';

import { StreamHeaderProps } from './interfaces';
import { StreamHeader } from './StreamHeader';
import { Styled } from './styled';

export const Stream = ({ viewIcon }: StreamHeaderProps) => {
  return (
    <Styled.Stream>
      <StreamHeader viewIcon={viewIcon} />
    </Styled.Stream>
  );
};
