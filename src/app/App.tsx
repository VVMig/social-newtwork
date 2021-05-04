import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { PostsList } from '../packages/components';
import { Styled } from './styled';
import { posts } from './posts';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Auth } from './auth/Auth';
import { observer } from 'mobx-react-lite';
import { store } from './store';
import { authorize, parseError } from './helpers';
import { AuthorizedRoute } from './routes';
import { PageSpinner } from './PageSpinner';
import { RoutesEnum } from './routes/RoutesEnum';
import { AuthContentProvider } from './AuthContentProvider';
import { Profile } from './profile/Profile';

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
                <PostsList posts={posts} />
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
