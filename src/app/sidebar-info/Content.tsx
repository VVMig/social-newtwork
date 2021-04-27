import React from 'react';
import { Widget } from '../../packages/components';
import { store } from '../store';

export const Content = () => {
  return (
    <>
      <Widget title="friends" items={store.user.friendsProfiles} />
    </>
  );
};
