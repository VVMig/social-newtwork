import React from 'react';
import { Header } from './Header';
import { Body } from './Body';
import { Footer } from './Footer';
import { Post as PostProps } from './interfaces';
import { Styled } from './styled';

export const Post = ({
  title,
  subtitle,
  date,
  text,
  author,
  likes,
}: PostProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Img />
      <Styled.Content>
        <Header title={title} subtitle={subtitle} date={date} />
        <Body
          text={text}
          firstName={author.firstName}
          lastName={author.lastName}
        />
        <Footer likes={likes} />
      </Styled.Content>
    </Styled.Wrapper>
  );
};
