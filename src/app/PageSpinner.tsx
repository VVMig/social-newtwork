import React from 'react';

import { Spinner } from '../packages/components';
import { Styled } from './styled';

export const PageSpinner = () => {
  return (
    <Styled.Wrapper register>
      <Styled.PageSpinner>
        <Spinner />
      </Styled.PageSpinner>
    </Styled.Wrapper>
  );
};
