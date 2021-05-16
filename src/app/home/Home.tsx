import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { Post, PostsList } from '../../packages/components';
import { fetchNews, parseError } from '../helpers';
import { store } from '../store';
import { Styled } from './styled';

export const Home = observer(() => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchHomePage = async () => {
    try {
      const res = await fetchNews();
      setPosts(res);
    } catch (error) {
      store.setError(parseError(error));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHomePage();
  }, []);

  return <>{loading ? <Styled.HomeSpinner /> : <PostsList posts={posts} />}</>;
});
