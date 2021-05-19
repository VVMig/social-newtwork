import React, { useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';

import { Post, PostsList } from '../../packages/components';
import { fetchNews, parseError } from '../helpers';
import { store } from '../store';
import { Styled } from './styled';

export const Home = observer(() => {
  const news = localStorage.getItem('news');
  const [isLoading, setIsLoading] = useState(!news);
  const [posts, setPosts] = useState<Post[]>(news ? JSON.parse(news) : []);

  const fetchHomePage = async () => {
    try {
      const res = await fetchNews();
      setPosts(res);
      localStorage.setItem('news', JSON.stringify(res));
    } catch (error) {
      store.setError(parseError(error));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHomePage();
  }, []);

  return (
    <>{isLoading ? <Styled.HomeSpinner /> : <PostsList posts={posts} />}</>
  );
});
