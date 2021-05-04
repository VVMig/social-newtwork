import { Instance } from 'mobx-state-tree';
import { WSEvents } from './WSEvents';
import { ActionUser } from '../interfaces';
import { Profile } from '../store/Profile';
import { User } from '../store/User';

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

export interface INotification {
  notificationType: NotificationType;
  from: ActionUser;
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

export interface ILastMessage {
  type: WSEvents.Update | WSEvents.Profile | WSEvents.FollowingUpdate;
  payload:
    | IUpdate
    | Instance<typeof Profile>
    | Instance<typeof User>
    | INotification;
}

export interface IUpdate {
  _id: string;
  online: boolean;
  lastVisit: number;
  avatar: string;
  firstName: string;
  lastName: string;
  notifications: INotification[];
}

export enum NotificationType {
  Follow = 'Follow',
  Like = 'Like',
}
