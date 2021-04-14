import Axios from 'axios';
import { axiosConfig } from '../utils/axiosConfig';

const apiClient = Axios.create(axiosConfig);

export const refreshToken = async () => {
  await apiClient.post('/auth/refreshToken');
};
