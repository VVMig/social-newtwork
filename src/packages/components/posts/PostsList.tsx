import React from 'react';
import { PostsListProps } from './interfaces';
import { Post } from './Post';

export const PostsList = ({ posts }: PostsListProps) => {
  return (
    <>
      {posts.map((x, i) => (
        <Post {...x} key={i} />
      ))}
    </>
  );
};
