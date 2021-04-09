import { types } from 'mobx-state-tree';

export const User = types
  .model('User', {
    firstName: types.optional(types.string, ''),
    lastName: types.optional(types.string, ''),
    email: types.optional(types.string, ''),
    verified: types.optional(types.boolean, false),
  })
  .actions((self) => ({}));
