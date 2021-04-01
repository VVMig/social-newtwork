import React from 'react';
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
import { Login } from './login/Login';

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/register">
            <Styled.Wrapper>
              <Login />
            </Styled.Wrapper>
          </Route>
          <Route path={TabRoutes.Home}>
            <Styled.Wrapper auth>
              <SidebarInfo friends={friends} groups={groups} />
              <Styled.Content>
                <Header tabs={tabs} />
                <PostsList posts={posts} />
              </Styled.Content>
              <SidebarLive
                viewIcon={<Icon type={IconType.Views} />}
                notifyIcon={<Icon type={IconType.Notifications} />}
                sendIcon={<Icon type={IconType.Send} />}
              />
            </Styled.Wrapper>
          </Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};
