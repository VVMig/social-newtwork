import React from 'react';

import { observer } from 'mobx-react-lite';

import { FriendFields, Widget } from '../../packages/components';
import { store } from '../store';

interface Props {
  searchedItems: FriendFields[];
  searchingUser: string;
}

export const Content = observer(({ searchedItems, searchingUser }: Props) => {
  return (
    <>
      <Widget
        title={searchingUser ? 'Result' : 'Following'}
        items={
          searchedItems.length ? searchedItems : store.user.followingProfiles
        }
        altTitle={searchingUser ? 'Could not find' : 'Start explore'}
      />
    </>
  );
});
