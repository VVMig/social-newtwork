import { Instance, types } from 'mobx-state-tree';

import { ImageProps } from '../../packages/components';
import { FollowerFields } from '../profile/interfaces';
import { RoutesEnum } from '../routes/RoutesEnum';
import { imageUrl } from '../url';
import { defaultTypes } from '../utils';

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

const Followers = types.model('Followers', {
  firstName: types.optional(types.string, 'unknown'),
  _id: types.optional(types.string, ''),
  avatar: types.maybeNull(Photo),
  online: types.optional(types.boolean, false),
});

export const Profile = types
  .model('Profile', {
    firstName: defaultTypes.maybeString,
    lastName: defaultTypes.maybeString,
    id: defaultTypes.maybeString,
    followers: types.optional(types.array(Followers), []),
    photos: types.optional(types.array(Photo), []),
    avatar: types.maybeNull(Photo),
    online: defaultTypes.maybeBoolean,
    lastVisit: defaultTypes.maybeNumber,
  })
  .actions((self) => ({
    updateProfile(updatedProfile: Instance<typeof self>) {
      Object.assign(self, updatedProfile);
    },
  }))
  .views((self) => ({
    get profileAvatar() {
      return {
        src: self.avatar?.name ? `${imageUrl}/${self.avatar.name}` : '',
        isModal: !!self.avatar,
        likesNumber: self.avatar?.likes.length || 0,
        imageDate: self.avatar?.date || 0,
      };
    },
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
        {
          title: 'Likes',
          amount: self.photos.reduce(
            (likes, photo) => likes + photo.likes.length,
            0
          ),
        },
      ];
    },
    get profilePhotos(): ImageProps[] {
      return self.photos
        .map((photo) => ({
          src: `${imageUrl}/${photo.name}`,
          isModal: true,
          likesNumber: photo.likes.length,
          imageDate: photo.date,
        }))
        .reverse();
    },
    get profileFollowers(): FollowerFields[] {
      return self.followers.map((follower) => ({
        route: `${RoutesEnum.Profile}/${follower._id}`,
        avatar: follower.avatar?.name
          ? `${imageUrl}/${follower.avatar.name}`
          : '',
        firstName: follower.firstName,
        online: follower.online,
      }));
    },
  }));
