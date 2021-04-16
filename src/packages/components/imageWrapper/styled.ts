import styled from 'styled-components';

export interface Props {
  src?: string;
  className?: string;
}

const Img = styled.div<Props>`
  background: ${(props) => props.src || props.theme.primary};
  border-radius: 25px;
  background-position: center;
  background-size: cover;
`;

export const Styled = {
  Img,
};
