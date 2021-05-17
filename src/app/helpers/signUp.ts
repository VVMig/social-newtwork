import Axios from 'axios';

import { SignUpValues } from '../auth/interfaces';
import { axiosConfig } from '../utils/axiosConfig';

const apiClient = Axios.create(axiosConfig);

export const signUp = async (values: SignUpValues) => {
  await apiClient.post('/auth/registration', values);
};
