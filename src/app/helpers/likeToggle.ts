import Axios from 'axios';

import { endpoints } from '../endpoints';
import { axiosConfig } from '../utils/axiosConfig';

const apiClient = Axios.create(axiosConfig);

export const likeToggle = async (imageName: string) => {
  await apiClient.post(endpoints.user.toggleLike, {
    imageName,
  });
};
