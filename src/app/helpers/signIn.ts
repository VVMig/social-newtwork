import Axios from 'axios';
import { axiosConfig } from '../utils/axiosConfig';
import { SignInValues } from '../auth/interfaces';

const apiClient = Axios.create(axiosConfig);

export const signIn = async (values: SignInValues) => {
  await apiClient.post('/auth/login', values);
};
