import Axios from 'axios';

import { endpoints } from '../endpoints';
import { store } from '../store';
import { axiosConfig } from '../utils/axiosConfig';

const apiClient = Axios.create(axiosConfig);

export const signOut = async () => {
  await apiClient.post(endpoints.auth.sighOut);
  store.resetUser();
};
