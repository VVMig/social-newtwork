import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from '../packages/components/header/Header';
import { PostsList } from '../packages/components/posts/PostsList';
import { Wrapper } from './styled';
import { tabs } from './tabs';
import { friends } from './friends';
import { groups } from './groups';
import { posts } from './posts';
import { TabRoutes } from './IconEnum';
import { headerHeight } from '../packages/components';
import { SidebarInfo } from './sidebar-info/SidebarInfo';

export const App = () => {
  return (
    <BrowserRouter>
      <Header tabs={tabs} />
      <SidebarInfo friends={friends} groups={groups} />
      <Wrapper width="100%" headerHeight={headerHeight}>
        <Switch>
          <Route path={TabRoutes.Home}>
            <PostsList posts={posts} />
          </Route>
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
};
