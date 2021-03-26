import styled from 'styled-components';

export interface FontSize {
  fontSize: number;
}

const Dot = styled.span<FontSize>`
  color: #00f8ea;
  font-size: ${(props) => props.fontSize}px;
  user-select: none;
  line-height: 0;
`;

export const Styled = {
  Dot,
};
