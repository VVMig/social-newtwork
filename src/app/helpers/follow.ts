import Axios from 'axios';
import { axiosConfig } from '../utils/axiosConfig';

const apiClient = Axios.create(axiosConfig);

export const follow = async (userId: string) => {
  await apiClient.post('/user/follow', { userId });
};
