import React, { useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Header, PostsList } from '../packages/components';
import { Styled } from './styled';
import { tabs } from './tabs';
import { friends } from './friends';
import { groups } from './groups';
import { posts } from './posts';
import { IconType, TabRoutes } from './IconEnum';
import { SidebarInfo } from './sidebar-info/SidebarInfo';
import { SidebarLive } from './sidebar-live/SidebarLive';
import { Icon } from './Icon';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Auth } from './auth/Auth';
import { observer } from 'mobx-react-lite';
import { store } from './store';

export const App = observer(() => {
  useEffect(() => {
    store.user.authorizeUser();
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Switch>
          <Styled.Wrapper>
            <Route path="/authorization">
              <Auth />
            </Route>
          </Styled.Wrapper>

          <Route path="/">
            <Styled.Wrapper auth>
              <SidebarInfo friends={friends} groups={groups} />
              <Styled.Content>
                <Header tabs={tabs} />
                <Route path={TabRoutes.Home}>
                  <PostsList posts={posts} />
                </Route>
              </Styled.Content>
              <SidebarLive
                viewIcon={<Icon type={IconType.Views} />}
                notifyIcon={<Icon type={IconType.Notifications} />}
                sendIcon={<Icon type={IconType.Send} />}
              />
            </Styled.Wrapper>
          </Route>

          <Redirect to={'/authorization'} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
});
