import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface Props extends RouteProps {
  isAccess: boolean;
}

export const PrivateRoute: React.FC<Props> = ({
  children,
  isAccess,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={() => {
        return isAccess ? children : <Redirect to={'/'} />;
      }}
    />
  );
};
