import styled from 'styled-components';
import { Link as StyledLink } from 'react-router-dom';

export interface AvatarProps {
  size: number;
  route?: string;
}

const Avatar = styled.div<AvatarProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-position: center;
  background-size: cover;
  background-color: ${(props) => props.theme.primary};
  border-radius: 50%;
`;

const Link = styled(StyledLink)`
  text-decoration: none;
  color: inherit;
`;

export const Styled = {
  Avatar,
  Link,
};
