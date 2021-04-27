import { types } from 'mobx-state-tree';
import { defaultTypes } from '../utils';
import { imageUrl } from '../url';
import { ImageProps } from '../../packages/components';
import { RoutesEnum } from '../routes/RoutesEnum';
import { FriendFields } from '../profile/interfaces';

const Friend = types.model('Friend', {
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
    friends: types.optional(types.array(Friend), []),
    photos: types.optional(types.array(Photo), []),
    avatar: types.optional(Photo, {}),
    online: defaultTypes.maybeBoolean,
    lastVisit: defaultTypes.maybeNumber,
  })
  .views((self) => ({
    get name() {
      return `${self.firstName} ${self.lastName}`;
    },
    get stats() {
      return [
        {
          title: 'Friends',
          amount: self.friends.length,
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
    get profileFriends(): FriendFields[] {
      return self.friends.map((friend) => ({
        route: `${RoutesEnum.Profile}/${friend._id}`,
        avatar: friend.avatar,
        firstName: friend.firstName,
        online: friend.online,
      }));
    },
  }));
