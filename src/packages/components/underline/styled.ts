import styled, { keyframes } from 'styled-components';
import { Props } from './interfaces';

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

export const StyledUnderline = styled.div<Props>`
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: rgb(71, 105, 255);
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
