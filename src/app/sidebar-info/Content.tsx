import React from 'react';

import { observer } from 'mobx-react-lite';

import { FriendFields, Widget } from '../../packages/components';
import { store } from '../store';

interface Props {
  searchedItems: FriendFields[];
  searchingUser: string;
  isSearchLoading: boolean;
}

export const Content = observer(
  ({ searchedItems, searchingUser, isSearchLoading }: Props) => {
    return (
      <>
        <Widget
          title={searchingUser ? 'Result' : 'Following'}
          items={searchingUser ? searchedItems : store.user.followingProfiles}
          altTitle={searchingUser ? 'Could not find' : 'Start explore'}
          isLoading={isSearchLoading}
        />
      </>
    );
  }
);
