import styled from 'styled-components';

const Btn = styled.button.attrs((props) => ({
  type: props.type,
}))`
  border: 2px solid ${(props) => props.theme.light};
  width: 60%;
  border-radius: 25px;
  padding: 25px 0px;
  font-size: 18px;
  background-color: transparent;
  cursor: pointer;
  overflow: hidden;
  color: ${(props) => props.theme.light};
  position: relative;

  &:focus {
    outline: 0;
  }

  &:active {
    transition: 0.1s linear;
    transform: scale(0.95);
  }
`;

export const Styled = {
  Btn,
};
