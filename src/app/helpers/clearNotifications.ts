import Axios from 'axios';

import { endpoints } from '../endpoints';
import { axiosConfig } from '../utils/axiosConfig';

const apiClient = Axios.create(axiosConfig);

export const clearNotifications = async () => {
  await apiClient.post(endpoints.user.clearNotifications);
};
