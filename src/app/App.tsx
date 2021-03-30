import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Header, PostsList, headerHeight } from '../packages/components';
import { Styled } from './styled';
import { tabs } from './tabs';
import { friends } from './friends';
import { groups } from './groups';
import { posts } from './posts';
import { IconType, TabRoutes } from './IconEnum';
import { SidebarInfo } from './sidebar-info/SidebarInfo';
import { SidebarLive } from './sidebar-live/SidebarLive';
import { Register } from './register/Register';
import { Icon } from './Icon';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route>
          <Styled.Wrapper headerHeight={headerHeight}>
            <SidebarInfo friends={friends} groups={groups} />
            <Styled.Content>
              <Header tabs={tabs} />
              <Route path={TabRoutes.Home}>
                <PostsList posts={posts} />
              </Route>
              <Redirect to={'/home'} />
            </Styled.Content>
            <SidebarLive
              viewIcon={<Icon type={IconType.Views} />}
              notifyIcon={<Icon type={IconType.Notifications} />}
              sendIcon={<Icon type={IconType.Send} />}
            />
          </Styled.Wrapper>
        </Route>
        <Route>
          <Register />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
