import React, { useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Auth } from './auth/Auth';
import { AuthContentProvider } from './AuthContentProvider';
import { authorize, parseError } from './helpers';
import { Home } from './home/Home';
import { Messager } from './messager';
import { PageSpinner } from './PageSpinner';
import { Profile } from './profile/Profile';
import { AuthorizedRoute } from './routes';
import { RoutesEnum } from './routes/RoutesEnum';
import { store } from './store';
import { Styled } from './styled';
import { theme } from './theme';

export const App = observer(() => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const authorizeUser = async () => {
    try {
      await authorize();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      location.pathname !== RoutesEnum.Authentication &&
        store.setError(parseError(error));
    }
  };

  useEffect(() => {
    authorizeUser();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        {loading ? (
          <PageSpinner />
        ) : (
          <>
            <Route exact path={RoutesEnum.Authentication}>
              {!store.user || !store.user.verified ? (
                <Styled.Wrapper register>
                  <Auth />
                </Styled.Wrapper>
              ) : (
                <Redirect to={RoutesEnum.Home} />
              )}
            </Route>

            <AuthContentProvider>
              <AuthorizedRoute path={RoutesEnum.Home}>
                <Home />
              </AuthorizedRoute>
              <AuthorizedRoute path={RoutesEnum.Messager} exact>
                <Messager />
              </AuthorizedRoute>
              <Route path={`${RoutesEnum.Profile}/:id`}>
                <Profile />
              </Route>
            </AuthContentProvider>
          </>
        )}
      </Switch>
    </ThemeProvider>
  );
});
