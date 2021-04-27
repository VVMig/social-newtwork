import { cast, Instance, types } from 'mobx-state-tree';
import { Profile } from './Profile';
import { User } from './User';

export const Store = types
  .model('Store', {
    user: types.optional(User, {}),
    profile: types.optional(Profile, {}),
  })
  .actions((self) => ({
    setUser(user: Instance<typeof User>) {
      self.user = cast(user);
    },
    setProfile(profile: Instance<typeof Profile>) {
      self.profile = cast(profile);
    },
    resetProfile() {
      self.profile = cast({});
    },
    resetUser() {
      self.user = cast({});
    },
  }))
  .views((self) => ({
    get isUserSet() {
      return !Object.values(self.user).includes(undefined);
    },
    get isProfileSet() {
      return !Object.values(self.user).includes(undefined);
    },
  }));
