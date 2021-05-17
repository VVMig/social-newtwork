import styled from 'styled-components';

import { zIndex } from '../zIndex';

const Alert = styled.div`
  max-width: 600px;
  width: 100%;
  text-align: center;
  z-index: ${zIndex.alert};
  padding: 20px 10px;
  font-size: 20px;
  border-radius: 10px;
  color: ${(props) => props.theme.blue};
`;

const Close = styled.button`
  position: absolute;
  color: ${(props) => props.theme.blue};
  right: 0;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  font-size: 24px;
  top: 5px;
  right: 5px;

  &:hover {
    opacity: 0.7;
    transition: opacity 0.2s linear;
  }

  &:focus {
    outline: 0;
  }
`;

export const Styled = {
  Alert,
  Close,
};
