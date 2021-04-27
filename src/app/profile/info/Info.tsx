import React from 'react';
import { Body } from './Body';
import { Header } from './Header';
import { store } from '../../store';
import { observer } from 'mobx-react-lite';

export const Info = observer(() => {
  return (
    <>
      <Header
        name={store.profile.name}
        online={store.profile.online}
        lastVisit={store.profile.lastVisit}
      />
      <Body stats={store.profile.stats} />
    </>
  );
});
