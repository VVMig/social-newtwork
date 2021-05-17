import Axios from 'axios';

import { SignInValues } from '../auth/interfaces';
import { axiosConfig } from '../utils/axiosConfig';

const apiClient = Axios.create(axiosConfig);

export const signIn = async (values: SignInValues) => {
  await apiClient.post('/auth/login', values);
};
