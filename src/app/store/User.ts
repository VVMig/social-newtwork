import { cast, Instance, types } from 'mobx-state-tree';
import { RoutesEnum } from '../routes/RoutesEnum';
import { imageUrl } from '../url';
import { defaultTypes } from '../utils';
import { IUpdate } from '../wsreducer/interfaces';

const Avatar = types.model('Avatar', {
  _id: types.optional(types.string, ''),
  name: types.optional(types.string, ''),
});

export const ActionUser = types
  .model('ActionUser', {
    firstName: types.optional(types.string, ''),
    lastName: types.optional(types.string, ''),
    _id: types.optional(types.string, ''),
    avatar: types.maybeNull(Avatar),
  })
  .views((self) => ({
    get userAvatar() {
      return self.avatar ? `${imageUrl}/${self.avatar.name}` : '';
    },

    get name() {
      return `${self.firstName} ${self.lastName}`;
    },
  }));

export type IActionUser = Instance<typeof ActionUser>;

export const Notification = types
  .model('Notification', {
    notifyMessage: types.optional(types.string, ''),
    from: types.optional(ActionUser, {}),
  })
  .views((self) => ({
    get userAvatar() {
      return self.from.avatar ? `${imageUrl}/${self.from.avatar.name}` : '';
    },
  }));

export const Following = types
  .model('Following', {
    firstName: types.optional(types.string, ''),
    lastName: types.optional(types.string, ''),
    online: types.optional(types.boolean, false),
    _id: types.optional(types.string, ''),
    lastVisit: types.optional(types.number, 0),
    avatar: types.maybeNull(Avatar),
  })
  .views((self) => ({
    get followingAvatar() {
      return self.avatar ? `${imageUrl}/${self.avatar.name}` : '';
    },
  }));

export const Message = types.model('Message', {
  from: types.optional(types.string, ''),
  text: types.optional(types.string, ''),
  date: types.optional(types.number, 0),
  type: types.optional(types.string, 'Text'),
  read: types.optional(types.boolean, true),
  _id: types.optional(types.string, ''),
});

export type IMessage = Instance<typeof Message>;

const DialogMin = types
  .model('DialogMin', {
    from: types.optional(ActionUser, {}),
    lastMessage: types.optional(Message, {}),
    mute: types.optional(types.boolean, false),
    date: types.optional(types.number, 0),
    _id: types.optional(types.string, ''),
  })
  .views((self) => ({
    get read() {
      return self.lastMessage.read;
    },
  }));

export const User = types
  .model('User', {
    firstName: defaultTypes.maybeString,
    lastName: defaultTypes.maybeString,
    email: defaultTypes.maybeString,
    verified: defaultTypes.maybeBoolean,
    _id: defaultTypes.maybeString,
    following: types.optional(types.array(Following), []),
    avatar: types.maybeNull(Avatar),
    notifications: types.optional(types.array(Notification), []),
    allDialogs: types.optional(types.array(DialogMin), []),
  })
  .views((self) => ({
    get unreadDialogs() {
      return self.allDialogs.reduce((unread, dialog) => {
        if (!dialog.lastMessage.read && dialog.lastMessage.from !== self._id) {
          return unread + 1;
        }

        return unread;
      }, 0);
    },
    get fullName() {
      return `${self.firstName} ${self.lastName}`;
    },
    get followingProfiles() {
      return self.following.map((follow) => ({
        ...follow,
        avatar: follow.followingAvatar,
        route: `${RoutesEnum.Profile}/${follow._id}`,
      }));
    },
    get userAvatar() {
      return self.avatar ? `${imageUrl}/${self.avatar.name}` : '';
    },
  }))
  .actions((self) => ({
    updateFollowingStatus: (updatedFollowing: IUpdate) => {
      const updatedFollowingIndex = self.following.findIndex(
        (follow) => follow._id === updatedFollowing._id
      );
      if (updatedFollowingIndex > -1) {
        self.following[updatedFollowingIndex] = cast(updatedFollowing);
      } else self.following.push(updatedFollowing);
    },
    addNotification(notification: Instance<typeof Notification>) {
      self.notifications.push(notification);
    },
    resetNotifications() {
      self.notifications = cast([]);
    },
  }));
