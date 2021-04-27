import { WSEvents } from './WSEvents';
import { store } from '../store';

export interface IUpdate {
  _id: string;
  online: boolean;
  lastVisit: number;
  avatar: string;
  firstName: string;
  lastName: string;
}

interface ILastMessage {
  type: WSEvents.Update;
  payload: IUpdate;
}

export const wsActions = (lastMessage: ILastMessage) => {
  const { type, payload } = lastMessage;

  switch (type) {
    case WSEvents.Update:
      store.user?.updateFriendStatus(payload);
      break;

    default:
      break;
  }
};
