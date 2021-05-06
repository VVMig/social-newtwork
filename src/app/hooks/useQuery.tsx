import { useLocation } from 'react-router-dom';

export const useQuery = (query: string) => {
  return new URLSearchParams(useLocation().search).get(query);
};
