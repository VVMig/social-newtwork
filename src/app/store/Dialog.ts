import { Instance,types } from 'mobx-state-tree';

import { imageUrl } from '../url';
import { ActionUser, Message } from './User';

export const Dialog = types
  .model('Dialog', {
    messages: types.optional(types.array(Message), []),
    _id: types.optional(types.string, ''),
    interlocutor: types.optional(ActionUser, {}),
    commonId: types.optional(types.string, ''),
  })
  .views((self) => ({
    get name() {
      return `${self.interlocutor.firstName} ${self.interlocutor.lastName}`;
    },
    get userId() {
      return self.interlocutor._id;
    },
    get avatar() {
      return self.interlocutor.avatar
        ? `${imageUrl}/${self.interlocutor.avatar.name}`
        : '';
    },
  }));

export type IDialog = Instance<typeof Dialog>;
