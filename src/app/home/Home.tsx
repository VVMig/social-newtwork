import React, { useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';

import { Post, PostsList } from '../../packages/components';
import { fetchNews, parseError } from '../helpers';
import { store } from '../store';

export const Home = observer(() => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(0);

  const fetchHomePage = async () => {
    try {
      setIsLoading(true);
      const res = await fetchNews(page);
      setPosts(posts.concat(res));
    } catch (error) {
      store.setError(parseError(error));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (store.pageScrolling.isBottomPage) {
      setPage((prev) => prev + 1);
      fetchHomePage();
    }
  }, [store.pageScrolling.isBottomPage]);

  useEffect(() => {
    fetchHomePage();
  }, []);

  return <PostsList posts={posts} isLoading={isLoading} />;
});
