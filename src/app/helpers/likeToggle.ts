import Axios from 'axios';
import { axiosConfig } from '../utils/axiosConfig';

const apiClient = Axios.create(axiosConfig);

export const likeToggle = async (imageName: string) => {
  await apiClient.post(`/user/toggleLike`, {
    imageName,
  });
};
