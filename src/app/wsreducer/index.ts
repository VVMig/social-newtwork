import { WSEvents } from './WSEvents';
import { store } from '../store';
import { Instance } from 'mobx-state-tree';
import { Profile } from '../store/Profile';

export interface IUpdate {
  _id: string;
  online: boolean;
  lastVisit: number;
  avatar: string;
  firstName: string;
  lastName: string;
}

export interface IFollow {
  firstName: string;
  lastName: string;
  avatar: string;
  online: string;
}

export interface IPhoto {
  likes: number;
  _id: string;
  date: number;
}

export interface IProfile {
  _id: string;
  online: boolean;
  lastVisit: number;
  avatar: string;
  firstName: string;
  lastName: string;
  following: IFollow[];
  photos: IPhoto[];
}

interface ILastMessage {
  type: WSEvents.Update | WSEvents.Profile;
  payload: IUpdate | Instance<typeof Profile>;
}

export const wsActions = (lastMessage: ILastMessage) => {
  const { type, payload } = lastMessage;

  switch (type) {
    case WSEvents.Update:
      store.user?.updateFollowingStatus(payload as IUpdate);
      break;
    case WSEvents.Profile:
      store.profile.updateProfile(payload as Instance<typeof Profile>);
      break;
    default:
      break;
  }
};
