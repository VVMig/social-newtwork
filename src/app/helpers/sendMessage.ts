import Axios from 'axios';

import { endpoints } from '../endpoints';
import { axiosConfig } from '../utils/axiosConfig';

const apiClient = Axios.create(axiosConfig);

export const sendMessage = async (text: string, commonRoomId: string) => {
  await apiClient.post(endpoints.user.sendMessage, {
    text,
    roomId: commonRoomId,
  });
};
