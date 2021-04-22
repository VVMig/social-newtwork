import Axios from 'axios';
import { axiosConfig } from '../utils/axiosConfig';
import { ProfileUser } from '../profile/interfaces';

const apiClient = Axios.create(axiosConfig);

export const getProfile = async (id: string) => {
  const { data } = await apiClient.get<ProfileUser>(`/profile/${id}`);

  return data;
};
