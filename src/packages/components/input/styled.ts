import styled from 'styled-components';

const Label = styled.label`
  color: #91929d;
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 12px;
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
`;

const Input = styled.input`
  background-color: #f6f9fb;
  border: 0;
  border-bottom: 2px solid #91929d;
  width: 100%;
  padding: 7px 0;
  color: #91929d;
  font-size: 14px;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ ${Label} {
    font-size: 14px;
    cursor: text;
    top: 18px;
  }

  &:focus {
    outline: 0;
    border-color: rgb(71, 105, 255);
    border-radius: 5px;
    transition: 0.2s linear;
  }

  &:focus ~ ${Label} {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 12px;
    color: rgb(71, 105, 255);
    font-weight: 700;
  }
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
};
