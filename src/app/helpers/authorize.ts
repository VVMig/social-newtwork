import Axios from 'axios';

import { endpoints } from '../endpoints';
import { store } from '../store';
import { axiosConfig } from '../utils/axiosConfig';

const apiClient = Axios.create(axiosConfig);

export const authorize = async () => {
  const { data } = await apiClient.get(endpoints.user.getUser);

  store.setUser(data);
};
