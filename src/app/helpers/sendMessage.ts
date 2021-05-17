import Axios from 'axios';

import { axiosConfig } from '../utils/axiosConfig';

const apiClient = Axios.create(axiosConfig);

export const sendMessage = async (text: string, commonRoomId: string) => {
  await apiClient.post('/user/sendMessage', {
    text,
    roomId: commonRoomId,
  });
};
