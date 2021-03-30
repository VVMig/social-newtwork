import styled, { keyframes } from 'styled-components';

export interface UnderlineProps {
  parentClass: string;
}

const underlineAppear = keyframes`
    0% {
      width: 0;
      opacity: 0.2;
    }
    100% {
      width: 100%;
      opacity: 0.5;
    }
`;

const Underline = styled.div<UnderlineProps>`
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: ${(props) => props.theme.primary};
  bottom: 0;
  opacity: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px;

  ${(props) => `.${props.parentClass}`}:hover & {
    animation: ${underlineAppear} 0.2s ease-in-out;
    opacity: 0.5;
  }
`;

export const Styled = {
  Underline,
};
