import { AxiosError } from 'axios';

const unauthorizedCode = 401;

export const parseError = (error: AxiosError): string => {
  if (error.response?.status === unauthorizedCode) {
    return 'Please sign in';
  }
  return error.response?.data?.message || error.message;
};
