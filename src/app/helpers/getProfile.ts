import Axios from 'axios';

import { store } from '../store';
import { axiosConfig } from '../utils/axiosConfig';

const apiClient = Axios.create(axiosConfig);

export const getProfile = async (id: string) => {
  const { data } = await apiClient.get(`/profile/${id}`);

  store.setProfile(data);
};
