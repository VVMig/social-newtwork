import Axios from 'axios';
import { store } from '../store';
import { axiosConfig } from '../utils/axiosConfig';

const apiClient = Axios.create(axiosConfig);

export const signOut = async () => {
  await apiClient.post('/auth/signOut');
  store.resetUser();
};
