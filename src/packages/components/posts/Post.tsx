import React from 'react';
import { Header } from './Header';
import { Post as PostProps } from './interfaces';
import {
  Content,
  Img,
  Wrapper,
  Body,
  Author,
  Text,
  Avatar,
  AuthorInfo,
  Name,
  Subname,
  Like,
  Footer,
} from './Styled';

export const Post = ({
  title,
  subtitle,
  date,
  text,
  author,
  likes,
}: PostProps) => {
  return (
    <Wrapper>
      <Img />
      <Content>
        <Header
          title={title}
          subtitle={subtitle}
          day={new Date(date).getDay()}
          month={new Date(date).getMonth().toString()}
        />
        <Body>
          <Text>
            It may not be possible ads asdsaddassad asdasddas asddas dasasdas
            asddas, It may not be possible ads asdsaddassad asdasddas asddas
            dasasdas asddasIt may not be possible ads asdsaddassad asdasddas
            asddas dasasdas asddas, It may not be possible ads asdsaddassad
            asdasddas asddas dasasdas asddas
          </Text>
          <Author>
            <Avatar />
            <AuthorInfo>
              <Name>Valentino Del More</Name>
              <Subname>Product Manager</Subname>
            </AuthorInfo>
          </Author>
        </Body>
        <Footer>
          <Like>🔥 12</Like>
        </Footer>
      </Content>
    </Wrapper>
  );
};
