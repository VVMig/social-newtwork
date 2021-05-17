import Axios from 'axios';

import { axiosConfig } from '../utils/axiosConfig';

const apiClient = Axios.create(axiosConfig);

export const updateAvatar = async (imageId: string) => {
  await apiClient.post('/user/updateAvatar', {
    imageId,
  });
};
