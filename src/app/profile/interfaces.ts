import { ImageProps } from '../../packages/components';

export interface IPhoto {
  owner: string;
  likes: [];
  avatar: boolean;
  ext: string;
  date: number;
  _id: string;
}

export interface FollowerFields {
  route: string;
  firstName?: string;
  lastName?: string;
  online?: boolean;
  avatar?: string;
}
export interface Params {
  id: string;
}

export interface PhotosProps {
  photos: ImageProps[];
}

export interface FriendsProps {
  followers: FollowerFields[];
}

export interface StatisticFields {
  title: string;
  amount: number;
}

export interface StatisticsProps {
  stats: StatisticFields[];
}
