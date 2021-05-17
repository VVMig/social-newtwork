import React from 'react';

import { PostsListProps } from './interfaces';
import { Post } from './Post';
import { Styled } from './styled';

export const PostsList = ({ posts }: PostsListProps) => {
  return (
    <Styled.PostContainer>
      {posts.map((x, i) => (
        <Post {...x} key={i} />
      ))}
    </Styled.PostContainer>
  );
};
