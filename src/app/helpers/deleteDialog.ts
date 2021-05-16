import Axios from 'axios';
import { axiosConfig } from '../utils/axiosConfig';

const apiClient = Axios.create(axiosConfig);

export const deleteDialog = async (dialogId: string) => {
  await apiClient.post('/user/deleteRoom', { roomId: dialogId });
};
