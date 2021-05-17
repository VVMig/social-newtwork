import Axios from 'axios';

import { FriendFields } from '../../packages/components';
import { Following } from '../interfaces';
import { RoutesEnum } from '../routes/RoutesEnum';
import { imageUrl } from '../url';
import { axiosConfig } from '../utils/axiosConfig';

interface SearchResult {
  searchedItems: Following[];
}

const apiClient = Axios.create(axiosConfig);

export const searchUsers = async (name: string): Promise<FriendFields[]> => {
  const { data } = await apiClient.get<SearchResult>(`/user/search/${name}`);

  return data.searchedItems.map((item) => ({
    firstName: item.firstName,
    lastName: item.lastName,
    online: item.online,
    lastVisit: item.lastVisit,
    _id: item._id,
    avatar: item.avatar ? `${imageUrl}/${item.avatar.name}` : '',
    route: `${RoutesEnum.Profile}/${item._id}`,
  }));
};
