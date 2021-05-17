import Axios from 'axios';

import { endpoints } from '../endpoints';
import { axiosConfig } from '../utils/axiosConfig';

const apiClient = Axios.create(axiosConfig);

export const deletePhotosRequest = async (imagesName: string[]) => {
  await apiClient.post(endpoints.user.removePhotos, {
    imagesName,
  });
};
