import Axios from 'axios';

import { endpoints } from '../endpoints';
import { axiosConfig } from '../utils/axiosConfig';

const apiClient = Axios.create(axiosConfig);

export const deleteDialog = async (dialogId: string) => {
  await apiClient.post(endpoints.user.deleteRoom, { roomId: dialogId });
};
