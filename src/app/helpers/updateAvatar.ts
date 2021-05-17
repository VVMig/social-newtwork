import Axios from 'axios';

import { endpoints } from '../endpoints';
import { axiosConfig } from '../utils/axiosConfig';

const apiClient = Axios.create(axiosConfig);

export const updateAvatar = async (imageId: string) => {
  await apiClient.post(endpoints.user.updateAvatar, {
    imageId,
  });
};
