import styled, { css } from 'styled-components';
import { ImageProps } from './interfaces';

const Preview = styled.img<ImageProps>`
  background: ${(props) =>
    props.src ? `url(${props.src})` : props.theme.primary};
  border-radius: 25px;
  background-position: center;
  background-size: cover;

  object-fit: cover;

  ${(props) =>
    props.isModal &&
    css`
      cursor: pointer;
    `}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`;

const Date = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.additionalDarkGrey};
`;

export const Styled = {
  Preview,
  Image,
  InfoContainer,
  Date,
};
