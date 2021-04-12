import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { store } from '../store';

export const RedirectRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return store.user.isUserSet && store.user.current.verified ? (
          children
        ) : (
          <Redirect to={'/authorization'} />
        );
      }}
    />
  );
};
