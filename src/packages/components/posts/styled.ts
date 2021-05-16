import styled, { css } from 'styled-components';
import { SpanProps } from './interfaces';
import { ImageWrapper } from '../imageWrapper';

const moreSize = '30px';
const gaps = '30px';

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: ${gaps};
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.mainBackground};
  border-radius: 25px;
  height: 315px;
  padding: 10px 22px 10px 10px;
  justify-content: space-between;
`;

const PostImage = styled(ImageWrapper)`
  max-width: 300px;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 26px 0 29px 18px;
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  height: 70px;
`;

const Date = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 8px 0 15px 0;
  background-color: ${(props) => props.theme.bgBlue};
  color: ${(props) => props.theme.blue};
  border-radius: 10px;
  height: 72px;
  max-width: 52px;
  width: 100%;
`;

const DateSpan = styled.span<SpanProps>`
  ${(props) =>
    props.day
      ? css`
          color: ${(props) => props.theme.purple};
          font-size: 26px;
          font-weight: bold;
        `
      : css`
          color: ${(props) => props.theme.blue};
          font-size: 18px;
          font-weight: normal;
        `};
`;

const Title = styled.div`
  padding: 0 8px 0 8px;
  font-weight: bold;
  font-size: 12px;
  text-transform: capitalize;

  h2 {
    margin-block-start: 0;
    margin-block-end: 0;
  }
`;

const More = styled.div`
  color: ${(props) => props.theme.greyLight};
  cursor: pointer;
  margin-left: auto;

  svg {
    width: ${moreSize};
    height: ${moreSize};
  }

  &:hover {
    color: ${(props) => props.theme.greyDark};
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 17px 0 0 0;
  height: 110px;
`;

const Text = styled.div`
  color: ${(props) => props.theme.greyMain};
  font-size: 12px;
  font-weight: lighter;
  line-height: 20px;
  max-height: 60px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Author = styled.div`
  display: flex;
  height: 30px;
  margin-top: auto;
  width: 100%;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  padding: 0 0 0 7px;
`;

const Name = styled.span`
  color: ${(props) => props.theme.black};
  font-size: 12px;
`;

const Subname = styled.span`
  color: ${(props) => props.theme.greyMain};
  font-size: 8px;
`;

const Footer = styled.div`
  display: flex;
  height: 24px;
  margin-top: auto;
  align-items: center;
`;

const Subtitle = styled.span`
  color: ${(props) => props.theme.greyMain};
  font-size: 12px;
  font-weight: lighter;
  line-height: 25px;
  padding: 0 0 0 2px;
`;

const Like = styled.span.attrs({
  role: 'img',
})`
  font-size: 14px;
  color: ${(props) => props.theme.black};
  cursor: pointer;
`;

const ToSourceLink = styled.a`
  width: 100%;
  max-width: 300px;
`;

export const Styled = {
  ToSourceLink,
  PostContainer,
  Like,
  Subtitle,
  Footer,
  Wrapper,
  PostImage,
  Content,
  Header,
  Date,
  DateSpan,
  Title,
  More,
  Body,
  Text,
  Author,
  AuthorInfo,
  Subname,
  Name,
};
