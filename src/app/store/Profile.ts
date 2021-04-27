import { Instance, types } from 'mobx-state-tree';
import { defaultTypes } from '../utils';
import { imageUrl } from '../url';
import { ImageProps } from '../../packages/components';
import { RoutesEnum } from '../routes/RoutesEnum';
import { FollowerFields } from '../profile/interfaces';

const Followers = types.model('Followers', {
  firstName: types.optional(types.string, 'unknown'),
  _id: types.optional(types.string, ''),
  avatar: types.optional(types.string, ''),
  online: types.optional(types.boolean, false),
});

const Like = types.model('Like', {
  owner: types.optional(types.string, ''),
  _id: defaultTypes.maybeString,
});

const Photo = types.model('Photo', {
  likes: types.optional(types.array(Like), []),
  date: types.optional(types.number, 0),
  owner: types.optional(types.string, ''),
  _id: types.optional(types.string, ''),
  name: types.optional(types.string, ''),
});

export const Profile = types
  .model('Profile', {
    firstName: defaultTypes.maybeString,
    lastName: defaultTypes.maybeString,
    id: defaultTypes.maybeString,
    followers: types.optional(types.array(Followers), []),
    photos: types.optional(types.array(Photo), []),
    avatar: types.optional(Photo, {}),
    online: defaultTypes.maybeBoolean,
    lastVisit: defaultTypes.maybeNumber,
  })
  .actions((self) => ({
    updateProfile(updatedProfile: Instance<typeof self>) {
      console.log(updatedProfile);

      Object.assign(self, updatedProfile);
    },
  }))
  .views((self) => ({
    get name() {
      return `${self.firstName} ${self.lastName}`;
    },
    get stats() {
      return [
        {
          title: 'Followers',
          amount: self.followers.length,
        },
        {
          title: 'Photos',
          amount: self.photos.length,
        },
      ];
    },
    get profilePhotos(): ImageProps[] {
      return self.photos.map((photo) => ({
        src: `${imageUrl}/${photo.name}`,
        isModal: true,
        likesNumber: photo.likes.length,
        imageDate: photo.date,
      }));
    },
    get profileFollowers(): FollowerFields[] {
      return self.followers.map((follower) => ({
        route: `${RoutesEnum.Profile}/${follower._id}`,
        avatar: follower.avatar,
        firstName: follower.firstName,
        online: follower.online,
      }));
    },
  }));
