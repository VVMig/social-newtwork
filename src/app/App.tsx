import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { PostsList } from '../packages/components';
import { Styled } from './styled';
import { posts } from './posts';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Auth } from './auth/Auth';
import { observer } from 'mobx-react-lite';
import { store } from './store';
import { authorize } from './helpers';
import { AuthorizedRoute } from './routes';
import { PageSpinner } from './PageSpinner';
import { RoutesEnum } from './routes/RoutesEnum';

export const App = observer(() => {
  const [loading, setLoading] = useState(true);

  const authorizeUser = async () => {
    try {
      await authorize();
      setLoading(false);
    } catch (error) {
      console.dir(error);
    } finally {
      setLoading(false);
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
                <Styled.Wrapper>
                  <Auth />
                </Styled.Wrapper>
              ) : (
                <Redirect to={RoutesEnum.Home} />
              )}
            </Route>

            <AuthorizedRoute path={RoutesEnum.Home}>
              <PostsList posts={posts} />
            </AuthorizedRoute>
          </>
        )}
      </Switch>
    </ThemeProvider>
  );
});
