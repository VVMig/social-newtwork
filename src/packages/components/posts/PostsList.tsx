import React from 'react';
import styled from 'styled-components';
import { Post as PostFields } from './interfaces';
import { Post } from './Post';

const post: PostFields = {
  title: 'Hello',
  subtitle: 'world',
  author: {
    firstName: 'Valentino',
    lastName: 'Delmarko',
  },
  date: Date.now(),
  text: 'asddddd asdasddas asdsdaasd asdasdasd asdasd asd',
  likes: 12,
};

export const PostsList = () => {
  return <Post {...post} />;
};
