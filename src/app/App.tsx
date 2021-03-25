import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from '../packages/components/header/Header';
import { Sidebar } from '../packages/components/sidebar/Sidebar';
import { PostsList } from '../packages/components/posts/PostsList';
import { Wrapper } from './Styled';
import { tabs } from './tabs';
import { friends } from './friends';
import { groups } from './groups';
import { posts } from './posts';

export const App = () => {
  return (
    <BrowserRouter>
      <Header tabs={tabs} />
      <Sidebar friends={friends} groups={groups} />
      <Wrapper width="100%">
        <Switch>
          <Route exact path="/">
            <PostsList posts={posts} />
          </Route>
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
};
