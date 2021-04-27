import { cast, types } from 'mobx-state-tree';
import { RoutesEnum } from '../routes/RoutesEnum';
import { defaultTypes } from '../utils';
import { IUpdate } from '../wsreducer';

const Friend = types.model('Friend', {
  firstName: types.optional(types.string, ''),
  lastName: types.optional(types.string, ''),
  online: types.optional(types.boolean, false),
  _id: types.optional(types.string, ''),
  lastVisit: types.optional(types.number, 0),
  avatar: types.optional(types.string, ''),
});

export const User = types
  .model('User', {
    firstName: defaultTypes.maybeString,
    lastName: defaultTypes.maybeString,
    email: defaultTypes.maybeString,
    verified: defaultTypes.maybeBoolean,
    _id: defaultTypes.maybeString,
    friends: types.optional(types.array(Friend), []),
    avatar: types.optional(types.string, ''),
  })
  .views((self) => ({
    get fullName() {
      return `${self.firstName} ${self.lastName}`;
    },
    get friendsProfiles() {
      return self.friends.map((friend) => ({
        ...friend,
        avatar: friend.avatar,
        route: `${RoutesEnum.Profile}/${friend._id}`,
      }));
    },
  }))
  .actions((self) => ({
    updateFriendStatus: (updatedFriend: IUpdate) => {
      self.friends = cast(
        self.friends.map((friend) =>
          friend._id === updatedFriend._id
            ? { ...friend, ...updatedFriend }
            : friend
        )
      );
    },
  }));
