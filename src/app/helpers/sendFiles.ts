import Axios from 'axios';

import { endpoints } from '../endpoints';
import { axiosConfig, axiosFileHeader } from '../utils/axiosConfig';

const apiClient = Axios.create(axiosConfig);

export const sendFiles = async (files: Blob[]) => {
  const formData = new FormData();
  files.forEach((file) => formData.append('image', file));

  await apiClient.post(endpoints.user.uploadPhotos, formData, {
    ...axiosFileHeader,
  });
};
