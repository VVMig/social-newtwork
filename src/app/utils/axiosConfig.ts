import { AxiosRequestConfig } from 'axios';

import { url } from '../url';

export const axiosConfig: AxiosRequestConfig = {
  baseURL: `${url}/api`,
  withCredentials: true,
};

export const axiosNewsConfig: AxiosRequestConfig = {
  baseURL: 'http://api.mediastack.com/v1/news',
  params: {
    languages: 'en',
    sources: 'cnn',
    access_key: 'd284d33b86b6476424fd84de56ed660c',
    sort: 'published_desc',
  },
};

export const axiosFileHeader: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
};
