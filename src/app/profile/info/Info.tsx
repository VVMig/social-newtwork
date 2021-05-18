import React from 'react';

import { observer } from 'mobx-react-lite';

import { store } from '../../store';
import { Body } from './Body';
import { Header } from './Header';

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
