import { cast, types } from 'mobx-state-tree';
import { RoutesEnum } from '../routes/RoutesEnum';
import { defaultTypes } from '../utils';
import { IUpdate } from '../wsreducer';

const Following = types.model('Following', {
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
    following: types.optional(types.array(Following), []),
    avatar: types.optional(types.string, ''),
  })
  .views((self) => ({
    get fullName() {
      return `${self.firstName} ${self.lastName}`;
    },
    get followingProfiles() {
      return self.following.map((follow) => ({
        ...follow,
        avatar: follow.avatar,
        route: `${RoutesEnum.Profile}/${follow._id}`,
      }));
    },
  }))
  .actions((self) => ({
    updateFollowingStatus: (updatedFriend: IUpdate) => {
      self.following = cast(
        self.following.map((follow) =>
          follow._id === updatedFriend._id
            ? { ...follow, ...updatedFriend }
            : follow
        )
      );
    },
  }));
