import Axios from 'axios';
import { axiosConfig } from '../utils/axiosConfig';

const apiClient = Axios.create(axiosConfig);

export const clearNotifications = async () => {
  await apiClient.post('/user/clearNotifications');
};
