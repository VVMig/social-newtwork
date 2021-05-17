import Axios from 'axios';

import { endpoints } from '../endpoints';
import { axiosConfig } from '../utils/axiosConfig';

const apiClient = Axios.create(axiosConfig);

export const unfollow = async (userId: string) => {
  await apiClient.post(endpoints.user.unfollow, { userId });
};
