import { WSEvents } from './WSEvents';
import { store } from '../store';
import { Instance } from 'mobx-state-tree';
import { Profile } from '../store/Profile';
import { User } from '../store/User';
import { ILastMessage, IUpdate } from './interfaces';
import { notificationReducer } from '../helpers/notificationReducer';

export const wsActions = (lastMessage: ILastMessage) => {
  const { type, payload } = lastMessage;

  switch (type) {
    case WSEvents.Update:
      store.setUser(payload as Instance<typeof User>);
      notificationReducer(payload as IUpdate);
      store.setNotify(true);
      break;
    case WSEvents.Profile:
      store.profile.updateProfile(payload as Instance<typeof Profile>);
      break;
    case WSEvents.FollowingUpdate:
      store.user?.updateFollowingStatus(payload as IUpdate);
      break;
    default:
      break;
  }
};
