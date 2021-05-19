import styled, { keyframes } from 'styled-components';

const appearArrow = keyframes`
  0%{
    opacity: 0;
  },
  100% {
    opacity: 1;
  }
`;

const ScrollArrow = styled.div`
  opacity: 0.5;
  transform: rotate(-90deg);
  transform-origin: center;
  position: absolute;
  right: 0;
  bottom: 20px;
  cursor: pointer;
  animation: ${appearArrow} 0.2s linear;
  overflow: hidden;
`;

export const Styled = {
  ScrollArrow,
};
