import { Instance } from 'mobx-state-tree';

import { notificationReducer } from '../helpers/notificationReducer';
import { store } from '../store';
import { IDialog } from '../store/Dialog';
import { Profile } from '../store/Profile';
import { User } from '../store/User';
import { IError,ILastMessage, IUpdate } from './interfaces';
import { WSEvents } from './WSEvents';

export const wsActions = (lastMessage: ILastMessage) => {
  const { type, payload } = lastMessage;

  switch (type) {
    case WSEvents.Update:
      store.setUser(payload as Instance<typeof User>);
      notificationReducer(payload as IUpdate);
      store.setNotify(true);
      break;
    case WSEvents.Profile:
      store.setProfile(payload as Instance<typeof Profile>);
      break;
    case WSEvents.FollowingUpdate:
      store.user?.updateFollowingStatus(payload as IUpdate);
      break;
    case WSEvents.Error:
      store.setError((payload as IError).message);
      break;
    case WSEvents.RoomUpdate:
      store.setDialog(payload as IDialog);
      break;
    default:
      break;
  }
};
