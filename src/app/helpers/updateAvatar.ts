import Axios from 'axios';
import { axiosConfig } from '../utils/axiosConfig';

const apiClient = Axios.create(axiosConfig);

export const updateAvatar = async (imageId: string) => {
  const { data } = await apiClient.post('/user/updateAvatar', {
    imageId,
  });

  console.log(data);
};
