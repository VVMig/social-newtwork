import styled, { css, keyframes } from 'styled-components';
import { zIndex } from '../zIndex';

interface InputProps {
  error?: boolean;
  success?: boolean;
}

const iconSize = 20;
const paddingLeft = 40;
const paddingTopContainer = 10;

const appearTop = keyframes`
  0%{
    transform: translateY(-10%);
    opacity: 0;
  }
  100%{
    transform: translateY(0);
    opacity: 1;
  }
`;

const Input = styled.input<InputProps>`
  background-color: ${(props) => props.theme.additionalBackground};
  border: 0;
  width: 100%;
  padding: 10px 15px 10px ${paddingLeft}px;
  color: ${(props) => props.theme.textMain};
  font-size: 18px;
  border-radius: 5px;
  z-index: ${zIndex.inputs};

  ${(props) =>
    props.error &&
    css`
      transition: 0.2s linear;
      box-shadow: inset 0 0 5px ${(props) => props.theme.danger};
    `}

  ${(props) =>
    props.success &&
    css`
      transition: 0.2s linear;
      box-shadow: inset 0 0 5px ${(props) => props.theme.success};
    `}

  &::placeholder {
    color: ${(props) => props.theme.textMain};
    text-transform: capitalize;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 10px ${(props) => props.theme.inputShadow};
    transition: 0.2s linear;
  }
`;

const IconContainer = styled.label`
  max-width: ${paddingLeft}px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 41px;
  top: ${paddingTopContainer}px;
  left: 0;
  color: ${(props) => props.theme.textMain};
  padding-bottom: 3px;

  & div {
    width: ${iconSize}px;
    height: ${iconSize}px;
  }

  & svg {
    height: ${iconSize}px;
    width: ${iconSize}px;
  }
`;

const InputGroup = styled.div`
  padding-top: ${paddingTopContainer}px;
  position: relative;
  width: 100%;
`;

const Error = styled.div`
  padding-top: 3px;
  color: ${(props) => props.theme.danger};
  animation: ${appearTop} 200ms linear;
  z-index: ${zIndex.error};
`;

export const Styled = {
  Input,
  InputGroup,
  IconContainer,
  Error,
};
