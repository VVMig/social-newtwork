import { types } from 'mobx-state-tree';
import { ActionUser } from './User';

const Message = types.model('Message', {
  from: ActionUser,
  text: types.optional(types.string, ''),
  date: types.optional(types.number, 0),
  type: types.optional(types.string, 'Text'),
});

export const Dialog = types.model('Dialog', {
  messages: types.optional(types.array(Message), []),
  date: types.optional(types.number, 0),
  read: types.optional(types.boolean, false),
  mute: types.optional(types.boolean, false),
  lastMessage: types.optional(types.string, ''),
});
