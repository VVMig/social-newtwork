import { AxiosRequestConfig } from 'axios';

import { url } from '../url';

export const axiosConfig: AxiosRequestConfig = {
  baseURL: `${url}/api`,
  withCredentials: true,
};

export const newsLimit = 25;

export const axiosNewsConfig: AxiosRequestConfig = {
  baseURL: 'http://api.mediastack.com/v1/news',
  params: {
    languages: 'en',
    sources: 'cnn',
    access_key: 'fa817602fe96164d44d5ad35f68b1112',
    sort: 'published_desc',
    limit: newsLimit,
  },
};

export const axiosFileHeader: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
};
