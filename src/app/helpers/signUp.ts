import Axios from 'axios';

import { SignUpValues } from '../auth/interfaces';
import { endpoints } from '../endpoints';
import { axiosConfig } from '../utils/axiosConfig';

const apiClient = Axios.create(axiosConfig);

export const signUp = async (values: SignUpValues) => {
  await apiClient.post(endpoints.auth.signUp, values);
};
