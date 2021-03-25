import styled from 'styled-components';
import { AvatarProps, ImgProps, SpanProps } from './interfaces';

const avatarSize = '29px';
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
  max-width: 660px;
  width: 100%;
  background-color: #f8f8f9;
  border-radius: 25px;
  height: 315px;
  padding: 10px 22px 10px 10px;
  justify-content: space-between;
`;

const Img = styled.div<ImgProps>`
  max-width: 300px;
  width: 100%;
  height: 100%;
  background: ${(props) => props.imgSrc || 'rgb(71, 105, 255)'};
  border-radius: 25px;
  background-position: center;
  background-size: cover;
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
  background-color: #00f5f6;
  color: #006cb0;
  border-radius: 10px;
  height: 72px;
  max-width: 52px;
  width: 100%;
`;

const DateSpan = styled.span<SpanProps>`
  color: ${(props) => props.color || '#006CB0'};
  font-size: ${(props) => props.fontSize || '18px'};
  font-weight: ${(props) => props.weight || 'normal'};
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
  color: #bebec4;
  cursor: pointer;
  margin-left: auto;

  svg {
    width: ${moreSize};
    height: ${moreSize};
  }

  &:hover {
    color: #a9a9af;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 17px 0 0 0;
  height: 110px;
`;

const Text = styled.div`
  color: #8f8f8f;
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

const Avatar = styled.div<AvatarProps>`
  background: ${(props) => props.imgSrc || 'rgb(71, 105, 255)'};
  width: ${avatarSize};
  height: ${avatarSize};
  border-radius: 50%;
  border: 1px solid #ffffff;
  box-shadow: 1px 1px 4px #d8d8d8;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  padding: 0 0 0 7px;
`;

const Name = styled.span`
  color: #000;
  font-size: 12px;
`;

const Subname = styled.span`
  color: #8f8f8f;
  font-size: 8px;
`;

const Footer = styled.div`
  display: flex;
  height: 24px;
  margin-top: auto;
  align-items: center;
`;

const Subtitle = styled.span`
  color: #8f8f8f;
  font-size: 12px;
  font-weight: lighter;
  line-height: 25px;
  padding: 0 0 0 2px;
`;

const Like = styled.span.attrs({
  role: 'img',
})`
  font-size: 14px;
  color: #000;
  cursor: pointer;
`;

export const Styled = {
  PostContainer,
  Like,
  Subtitle,
  Footer,
  Wrapper,
  Img,
  Content,
  Header,
  Date,
  DateSpan,
  Title,
  More,
  Body,
  Text,
  Author,
  Avatar,
  AuthorInfo,
  Subname,
  Name,
};
