import Axios from 'axios';

import { axiosConfig } from '../utils/axiosConfig';

const apiClient = Axios.create(axiosConfig);

export const unfollow = async (userId: string) => {
  await apiClient.post('/user/unfollow', { userId });
};
