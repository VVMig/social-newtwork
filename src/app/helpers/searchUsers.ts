import Axios from 'axios';
import { FriendFields } from '../../packages/components';
import { RoutesEnum } from '../routes/RoutesEnum';
import { axiosConfig } from '../utils/axiosConfig';

interface SearchedUser extends FriendFields {
  _id: string;
}

interface SearchResult {
  searchedItems: SearchedUser[];
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
    avatar: item.avatar,
    route: `${RoutesEnum.Profile}/${item._id}`,
  }));
};
