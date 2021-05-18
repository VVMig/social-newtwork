import Axios from 'axios';

import { SignInValues } from '../auth/interfaces';
import { endpoints } from '../endpoints';
import { axiosConfig } from '../utils/axiosConfig';

const apiClient = Axios.create(axiosConfig);

export const signIn = async (values: SignInValues) => {
  await apiClient.post(endpoints.auth.signIn, values);
};
