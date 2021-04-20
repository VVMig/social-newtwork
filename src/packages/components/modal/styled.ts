import styled, { css, keyframes } from 'styled-components';

export const defaultDelay = 200;

interface CloseButtonProps {
  colorToggle: boolean;
}

const appear = keyframes`
    0%{
        transform: scale(0.2);
    }
    100%{
        transform: scale(1);
    }
`;

const CloseButton = styled.span<CloseButtonProps>`
  position: fixed;
  color: ${(props) => props.theme.additionalGrey};
  right: 25px;
  top: 25px;
  font-size: 45px;
  cursor: pointer;
  transition: 0.1s linear;

  ${(props) =>
    props.colorToggle &&
    css`
      color: ${(props) => props.theme.light};
    `}
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.lightBlack};
  z-index: 1500;
  overflow: auto;
  display: grid;
  place-items: center;
`;

const Modal = styled.div`
  position: relative;
  background: ${(props) => props.theme.light};
  z-index: 1600;
  max-width: 980px;
  border-radius: 10px;
  height: max-content;
  overflow: hidden;

  &.entered {
    animation: ${appear} ${defaultDelay}ms linear;
  }
`;

const ModalContainer = styled.div`
  padding: 30px;
`;

const ModalHeader = styled.div`
  background-color: ${(props) => props.theme.greyLight};
  padding: 10px 10px;
  font-size: 24px;
  color: ${(props) => props.theme.light};
`;

const ModalContent = styled.div`
  padding: 20px;
`;

export const Styled = {
  ModalContent,
  ModalWrapper,
  Modal,
  CloseButton,
  ModalHeader,
  ModalContainer,
};
