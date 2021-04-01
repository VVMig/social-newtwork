import styled from 'styled-components';

interface InputProps {
  error: boolean;
  success: boolean;
}

const Label = styled.label`
  color: ${(props) => props.theme.textMain};
  position: absolute;
  top: 6px;
  display: block;
  transition: 0.2s;
  font-size: 12px;
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  text-transform: capitalize;
`;

const Input = styled.input<InputProps>`
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid
    ${(props) =>
      props.error
        ? props.theme.pink
        : props.success
        ? props.theme.success
        : props.theme.textDark};
  width: 100%;
  padding: 15px 0 2px;
  color: ${(props) => props.theme.black};
  font-size: 18px;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ ${Label} {
    font-size: 20px;
    cursor: text;
    top: 18px;
  }

  &:focus {
    outline: 0;
    border-color: ${(props) =>
      props.success ? props.theme.success : props.theme.primary};
    border-radius: 5px;
    transition: 0.2s linear;
  }

  &:focus ~ ${Label} {
    position: absolute;
    top: 6px;
    display: block;
    transition: 0.2s;
    font-size: 12px;
    color: rgb(71, 105, 255);
    font-weight: 700;
  }
`;

const Error = styled.div`
  font-size: 15px;
  color: ${(props) => props.theme.pink};
`;

const InputGroup = styled.div`
  padding-top: 5px;
  position: relative;
  width: 100%;
`;

export const Styled = {
  Input,
  Label,
  InputGroup,
  Error,
};
