import { cast, Instance, types } from 'mobx-state-tree';
import { Profile } from './Profile';
import { User } from './User';

export const Store = types
  .model('Store', {
    user: types.optional(User, {}),
    profile: types.optional(Profile, {}),
    notify: types.optional(types.boolean, false),
    error: types.maybe(types.string),
  })
  .actions((self) => ({
    setUser(user: Instance<typeof User>) {
      Object.assign(self.user, user);
      self.user.resetNotifications();
    },
    setProfile(profile: Instance<typeof Profile>) {
      self.profile = cast(profile);
    },
    resetProfile() {
      self.profile = cast({});
    },
    setNotify(notify: boolean) {
      self.notify = notify;
    },
    resetUser() {
      self.user = cast({});
    },
    setError(error?: string) {
      self.error = error || 'Network error';
    },
    resetError() {
      self.error = undefined;
    },
  }))
  .views((self) => ({
    get isUserSet() {
      return !Object.values(self.user).includes(undefined);
    },
    get isProfileSet() {
      return !Object.values(self.profile).includes(undefined);
    },
  }));
