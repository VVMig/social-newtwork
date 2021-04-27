import Axios from 'axios';
import { store } from '../store';
import { axiosConfig } from '../utils/axiosConfig';

const apiClient = Axios.create(axiosConfig);

export const authorize = async () => {
  const { data } = await apiClient.get('/user/current');

  console.log(data);
  store.setUser(data);
  console.log(store.user);
};
