import Axios from 'axios';

import { endpoints } from '../endpoints';
import { store } from '../store';
import { axiosConfig } from '../utils/axiosConfig';

const apiClient = Axios.create(axiosConfig);

export const getProfile = async (id: string) => {
  const { data } = await apiClient.get(endpoints.profile.getProfile(id));

  store.setProfile(data);
};
