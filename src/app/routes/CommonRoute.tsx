import React from 'react';

import { Route, RouteProps } from 'react-router-dom';

import { Styled } from '../styled';

export const CommonRoute: React.FC<RouteProps> = ({ children, ...props }) => {
  return (
    <Route
      {...props}
      render={() => (
        <Styled.Wrapper>
          <Styled.Content>{children}</Styled.Content>
        </Styled.Wrapper>
      )}
    />
  );
};
