import styled from 'styled-components';
import { Link as StyledLink } from 'react-router-dom';

const Messager = styled.div`
  width: 100%;
  min-height: 50%;
  border-radius: 10px;
`;

const Link = styled(StyledLink)`
  text-decoration: none;
  color: inherit;
`;

const EmptyDialogs = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  font-size: 24px;
  color: ${(props) => props.theme.additionalDarkGrey};
`;

export const Styled = {
  Messager,
  Link,
  EmptyDialogs,
};
