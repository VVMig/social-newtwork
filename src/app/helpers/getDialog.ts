import Axios from 'axios';

import { endpoints } from '../endpoints';
import { IDialog } from '../store/Dialog';
import { axiosConfig } from '../utils/axiosConfig';

const apiClient = Axios.create(axiosConfig);

export const getDialog = async (userId: string) => {
  const { data } = await apiClient.get<IDialog>(endpoints.user.getRoom, {
    params: {
      userId,
    },
  });

  return data;
};
