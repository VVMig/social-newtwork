import Axios from 'axios';

import { axiosConfig } from '../utils/axiosConfig';

const apiClient = Axios.create(axiosConfig);

export const deletePhotosRequest = async (imagesName: string[]) => {
  await apiClient.post('/user/removePhotos', {
    imagesName,
  });
};
