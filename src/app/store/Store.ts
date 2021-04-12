import { types } from 'mobx-state-tree';
import { User } from './User';

export const Store = types.model('Store', {
  user: types.optional(User, {}),
});
