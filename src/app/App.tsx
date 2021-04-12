import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
import { RedirectRoute } from './routes/RedirectRoute';

export const App = observer(() => {
  useEffect(() => {
    store.user.authorizeUser();
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/authorization">
            <Styled.Wrapper>
              <Auth />
            </Styled.Wrapper>
          </Route>

          <Styled.Wrapper auth>
            <SidebarInfo friends={friends} groups={groups} />
            <Styled.Content>
              <Header tabs={tabs} />
              <RedirectRoute exact path={TabRoutes.Home}>
                <PostsList posts={posts} />
              </RedirectRoute>
            </Styled.Content>
            <SidebarLive
              viewIcon={<Icon type={IconType.Views} />}
              notifyIcon={<Icon type={IconType.Notifications} />}
              sendIcon={<Icon type={IconType.Send} />}
            />
          </Styled.Wrapper>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
});
