import Axios from 'axios';
import { axiosConfig } from '../utils/axiosConfig';
import { SignUpValues } from '../auth/interfaces';

const apiClient = Axios.create(axiosConfig);

export const signUp = async (values: SignUpValues) => {
  await apiClient.post('/auth/registration', values);
};
