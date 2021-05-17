import React from 'react';

import { Redirect, Route, RouteProps } from 'react-router-dom';

import { store } from '../store';
import { RoutesEnum } from './RoutesEnum';

export const AuthorizedRoute: React.FC<RouteProps> = ({
  children,
  ...props
}) => {
  return (
    <Route
      {...props}
      render={() => {
        return store.user && store.user.verified ? (
          children
        ) : (
          <Redirect to={RoutesEnum.Authentication} />
        );
      }}
    />
  );
};
