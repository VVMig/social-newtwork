import React from 'react';

import { Body } from './Body';
import { Footer } from './Footer';
import { Header } from './Header';
import { Post as PostProps } from './interfaces';
import { Styled } from './styled';

export const Post = ({
  title,
  subtitle,
  date,
  text,
  author,
  likes,
  src,
  link,
}: PostProps) => {
  return (
    <Styled.Wrapper>
      <Styled.ToSourceLink href={link} target="_blank">
        <Styled.PostImage src={src} />
      </Styled.ToSourceLink>
      <Styled.Content>
        <Header title={title} subtitle={subtitle} date={date} />
        <Body text={text} />
        <Footer likes={likes} author={author} />
      </Styled.Content>
    </Styled.Wrapper>
  );
};
