import React from 'react';

import { Redirect, Route, RouteProps } from 'react-router-dom';

import { RoutesEnum } from './RoutesEnum';

interface Props extends RouteProps {
  isAccess: boolean;
}

export const PrivateRoute: React.FC<Props> = ({
  children,
  isAccess,
  ...props
}) => {
  return (
    <Route
      {...props}
      render={() => {
        return isAccess ? children : <Redirect to={RoutesEnum.Home} />;
      }}
    />
  );
};
