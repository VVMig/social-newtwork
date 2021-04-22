import styled, { css, keyframes } from 'styled-components';
import { ImageWrapper } from '../imageWrapper';

const iconSize = 80;
const activeSize = 20;

const duration = 200;

const FilesInput = styled.input``;

const success = keyframes`
    0%{
        transform: scale(0);
    }
    50%{
        transform: scale(1.1)
    }
    100%{
        transform: scale(1);
    }
`;

interface DragZoneProps {
  active?: boolean;
}

const Wrapper = styled.div`
  display: flex;
  max-width: 500px;
  width: 500px;
  height: 500px;
  justify-content: center;
  align-items: center;

  & svg {
    width: ${iconSize}px;
    height: ${iconSize}px;
    transition: 0.2s linear;
    color: ${(props) => props.theme.primary};
  }
`;

const DragZone = styled(Wrapper)`
  &:focus {
    outline: 0;
  }
`;

const UploadSuccess = styled(Wrapper)`
  & svg {
    width: ${iconSize + activeSize}px;
    height: ${iconSize + activeSize}px;
    color: ${(props) => props.theme.success};
    animation: ${success} ${duration}ms linear;
  }
`;

const UploadFailed = styled(Wrapper)`
  & svg {
    width: ${iconSize + activeSize}px;
    height: ${iconSize + activeSize}px;
    color: ${(props) => props.theme.danger};
    animation: ${success} ${duration}ms linear;
  }
`;

const Drag = styled.div<DragZoneProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transition: 0.2s linear;

  ${(props) =>
    props.active &&
    css`
      outline: none;
      box-shadow: 0 0 20px ${(props) => props.theme.darkBlue};

      & svg {
        width: ${iconSize + activeSize}px;
        height: ${iconSize + activeSize}px;

        color: ${(props) => props.theme.primary};
      }
    `}
`;

const DragTip = styled.span`
  padding-top: 5px;
  font-size: 16px;
  color: ${(props) => props.theme.additionalDarkGrey};
`;

const PreviewImage = styled(ImageWrapper)`
  width: 100px;
  height: 60px;
  border-radius: 0;
  border: 1px solid ${(props) => props.theme.additionalLightGrey};
`;

export const Styled = {
  UploadFailed,
  UploadSuccess,
  Wrapper,
  DragZone,
  FilesInput,
  Drag,
  DragTip,
  PreviewImage,
};
