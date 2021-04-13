import { AxiosError } from 'axios';

export const parseError = (error: AxiosError): string =>
  error.response?.data?.message || error.message;
