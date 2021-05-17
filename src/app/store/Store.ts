import { cast, Instance, types } from 'mobx-state-tree';

import { Dialog, IDialog } from './Dialog';
import { Profile } from './Profile';
import { User } from './User';

export const Store = types
  .model('Store', {
    user: types.optional(User, {}),
    profile: types.optional(Profile, {}),
    notify: types.optional(types.boolean, false),
    dialog: types.optional(Dialog, {}),
    error: types.maybe(types.string),
    newMessage: types.optional(types.array(types.number), []),
  })
  .actions((self) => ({
    setUser(user: Instance<typeof User>) {
      user.allDialogs?.forEach((dialog) => {
        const prevDialog = self.user.allDialogs.find(
          (prevDialog) => prevDialog._id === dialog._id
        );

        if (
          prevDialog &&
          prevDialog.lastMessage._id !== dialog.lastMessage._id &&
          !dialog.lastMessage.read &&
          dialog.lastMessage.from !== self.user._id
        ) {
          self.newMessage.push(1);
        }
      });
      Object.assign(self.user, user);
      self.user.resetNotifications();
    },
    setDialog(dialog: IDialog) {
      self.dialog = dialog;
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
    resetDialog() {
      self.dialog = cast({});
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
