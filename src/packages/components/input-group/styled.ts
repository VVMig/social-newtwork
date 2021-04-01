import styled from 'styled-components';

interface InputProps {
  error?: boolean;
  success?: boolean;
}

const iconSize = 20;
const paddingLeft = 40;
const paddingTopContainer = 10;

const Input = styled.input<InputProps>`
  background-color: ${(props) => props.theme.additionalBackground};
  border: 0;
  width: 100%;
  padding: 10px 15px 10px ${paddingLeft}px;
  color: ${(props) => props.theme.textMain};
  font-size: 18px;
  transition: 0.2s linear;

  &::placeholder {
    color: ${(props) => props.theme.textMain};
    text-transform: capitalize;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 10px ${(props) => props.theme.inputShadow};
    border-radius: 5px;
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

export const Styled = {
  Input,
  InputGroup,
  IconContainer,
};
