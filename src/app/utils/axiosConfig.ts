import { AxiosRequestConfig } from 'axios';
import { url } from '../url';

export const axiosConfig: AxiosRequestConfig = {
  baseURL: `${url}/api`,
  withCredentials: true,
};

export const axiosFileHeader: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
};
