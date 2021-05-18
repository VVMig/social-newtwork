import Axios from 'axios';

import { endpoints } from '../endpoints';
import { axiosConfig } from '../utils/axiosConfig';

const apiClient = Axios.create(axiosConfig);

export const refreshToken = async () => {
  await apiClient.post(endpoints.auth.refreshToken);
};
