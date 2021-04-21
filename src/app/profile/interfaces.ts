import { ImageProps, FriendFields } from '../../packages/components';

export interface PhotosProps {
  photos: ImageProps[];
}

export interface FriendsProps {
  friends: FriendFields[];
}

export interface StatisticFields {
  title: string;
  number: number;
}

export interface StatisticsProps {
  stats: StatisticFields[];
}
