import { ImageProps, FriendFields } from '../../packages/components';

export interface IPhoto {
  owner: ProfileUser;
  likes: [];
  avatar: boolean;
  ext: string;
  _id: string;
}

export interface ProfileUser {
  firstName: string;
  lastName: string;
  friends: FriendFields[];
  id: string;
  photos: IPhoto[];
}

export interface Params {
  id: string;
}

export interface PhotosProps {
  photos: ImageProps[];
}

export interface FriendsProps {
  friends: FriendFields[];
}

export interface StatisticFields {
  title: string;
  amount: number;
}

export interface StatisticsProps {
  stats: StatisticFields[];
}
