import Axios from 'axios';
import { axiosNewsConfig } from '../utils/axiosConfig';
import { parseNews } from './parseNews';

const apiClient = Axios.create(axiosNewsConfig);

export const fetchNews = async () => {
  const { data } = await apiClient.get('');

  return parseNews(data.data);
};
