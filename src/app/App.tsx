import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from '../packages/components';
import { PostsList } from '../packages/components';
import { Styled } from './styled';
import { tabs } from './tabs';
import { friends } from './friends';
import { groups } from './groups';
import { posts } from './posts';
import { TabRoutes } from './IconEnum';
import { headerHeight } from '../packages/components';
import { SidebarInfo } from './sidebar-info/SidebarInfo';
import { SidebarLive } from './sidebar-live/SidebarLive';

export const App = () => {
  return (
    <BrowserRouter>
      <Styled.Wrapper headerHeight={headerHeight}>
        <SidebarInfo friends={friends} groups={groups} />
        <Styled.Content>
          <Header tabs={tabs} />
          <Switch>
            <Route path={TabRoutes.Home}>
              <PostsList posts={posts} />
            </Route>
          </Switch>
        </Styled.Content>
        <SidebarLive />
      </Styled.Wrapper>
    </BrowserRouter>
  );
};
