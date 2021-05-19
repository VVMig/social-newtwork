import Axios from 'axios';

import { axiosNewsConfig, newsLimit } from '../utils/axiosConfig';
import { parseNews } from './parseNews';

const apiClient = Axios.create(axiosNewsConfig);

export const fetchNews = async (page = 0) => {
  const { data } = await apiClient.get('', {
    params: {
      offset: 0 + page * newsLimit,
    },
  });

  return parseNews(data.data);
};
