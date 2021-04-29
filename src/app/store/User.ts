import { cast, types } from 'mobx-state-tree';
import { RoutesEnum } from '../routes/RoutesEnum';
import { imageUrl } from '../url';
import { defaultTypes } from '../utils';
import { IUpdate } from '../wsreducer';

const Avatar = types.model('Avatar', {
  _id: types.optional(types.string, ''),
  name: types.optional(types.string, ''),
});

export const Following = types
  .model('Following', {
    firstName: types.optional(types.string, ''),
    lastName: types.optional(types.string, ''),
    online: types.optional(types.boolean, false),
    _id: types.optional(types.string, ''),
    lastVisit: types.optional(types.number, 0),
    avatar: types.optional(Avatar, {}),
  })
  .views((self) => ({
    get followingAvatar() {
      return self.avatar.name ? `${imageUrl}/${self.avatar.name}` : '';
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
    avatar: types.optional(Avatar, {}),
  })
  .views((self) => ({
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
      return self.avatar.name ? `${imageUrl}/${self.avatar.name}` : '';
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
  }));
