import React from 'react';

import { Spinner } from '../spinner';
import { PostsListProps } from './interfaces';
import { Post } from './Post';
import { Styled } from './styled';

export const PostsList = ({ posts, isLoading }: PostsListProps) => {
  return (
    <Styled.PostContainer>
      {posts.map((x, i) => (
        <Post {...x} key={i} />
      ))}
      {isLoading && <Spinner />}
    </Styled.PostContainer>
  );
};
