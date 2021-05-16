import Axios from 'axios';
import { IDialog } from '../store/Dialog';
import { axiosConfig } from '../utils/axiosConfig';

const apiClient = Axios.create(axiosConfig);

export const getDialog = async (userId: string) => {
  const { data } = await apiClient.get<IDialog>(`/user/room?userId=${userId}`);

  return data;
};
