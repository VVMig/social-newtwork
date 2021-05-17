import React, { useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';

import { Post, PostsList } from '../../packages/components';
import { fetchNews, parseError } from '../helpers';
import { store } from '../store';
import { Styled } from './styled';

export const Home = observer(() => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchHomePage = async () => {
    try {
      const res = await fetchNews();
      setPosts(res);
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
