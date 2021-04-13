import { types } from 'mobx-state-tree';
import { User } from './User';

export const Store = types
  .model('Store', {
    user: types.maybe(User),
  })
  .views((self) => ({
    get isUserSet() {
      return !!self.user;
    },
  }));
