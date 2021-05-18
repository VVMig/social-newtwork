import React from 'react';

import { Dot } from '..';
import { lastTimeAction } from '../utils';
import { Styled } from './styled';

interface Props {
  lastVisit: number;
  online: boolean;
}

export const Status: React.FC<Props> = ({ lastVisit, online }) => {
  return (
    <Styled.Status>
      {online ? (
        <Styled.Online>
          <Dot />
        </Styled.Online>
      ) : (
        <Styled.Offline>{lastTimeAction(lastVisit)}</Styled.Offline>
      )}
    </Styled.Status>
  );
};
