import { Link as StyledLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export interface AvatarProps {
  size?: number;
  route?: string;
  outline?: boolean;
  src?: string;
  className?: string;
  name?: string;
}

const Avatar = styled.div<AvatarProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-position: center;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.light};
  ${(props) =>
    props.src
      ? css`
          background-image: ${`url(${props.src})`};
        `
      : css`
          background-color: ${props.theme.purple};
        `}

  border-radius: 50%;
  text-transform: uppercase;
  ${(props) =>
    props.outline &&
    css`
      box-shadow: 0 0 0 0.15rem ${(props) => props.theme.darkBlue};
      transition: 0.1s linear box-shadow;
    `}
`;

const Link = styled(StyledLink)`
  text-decoration: none;
  color: inherit;
`;

export const Styled = {
  Avatar,
  Link,
};
