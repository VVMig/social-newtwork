import { ProfileUser, StatisticFields } from '../profile/interfaces';

export const parseStats = (profileUser: ProfileUser): StatisticFields[] => [
  {
    title: 'friends',
    amount: profileUser.friends.length,
  },
  {
    title: 'photos',
    amount: profileUser.photos.length,
  },
];
