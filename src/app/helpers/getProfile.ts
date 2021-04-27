import Axios from 'axios';
import { axiosConfig } from '../utils/axiosConfig';
import { store } from '../store';

const apiClient = Axios.create(axiosConfig);

export const getProfile = async (id: string) => {
  const { data } = await apiClient.get(`/profile/${id}`);

  console.log(data);
  store.setProfile(data);
};
