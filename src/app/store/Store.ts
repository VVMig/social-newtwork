import { Instance, types } from 'mobx-state-tree';
import { User } from './User';

export const Store = types
  .model('Store', {
    user: types.maybe(User),
  })
  .actions((self) => ({
    setUser(user: Instance<typeof User>) {
      self.user = { ...user };
    },
    resetUser() {
      self.user = undefined;
    },
  }))
  .views((self) => ({
    get isUserSet() {
      return !!self.user;
    },
  }));
