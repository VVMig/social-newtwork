import styled, { css } from 'styled-components';

import { Button } from '../button';
import { PreviewProps } from './interfaces';

const Preview = styled.div<PreviewProps>`
  background: ${(props) =>
    props.src ? `url(${props.src})` : props.theme.primary};
  border-radius: 25px;
  background-position: center;
  background-size: cover;

  object-fit: cover;

  ${(props) =>
    props.isSelected &&
    css`
      opacity: 0.5;
    `}

  ${(props) =>
    props.isModal &&
    css`
      cursor: pointer;
    `}
`;

const DefaultPreview = styled.div`
  background-color: ${(props) => props.theme.primary};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`;

const Date = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.additionalDarkGrey};
`;

const Actions = styled.div`
  display: flex;
`;

const SetAvatarButton = styled(Button)`
  background-color: ${(props) => props.theme.darkBlue};
  width: auto;
  padding: 5px;
  border-radius: 10px;
`;

const DeleteButton = styled(SetAvatarButton)`
  background-color: ${(props) => props.theme.danger};
`;

export const Styled = {
  DefaultPreview,
  Preview,
  Image,
  InfoContainer,
  Date,
  Actions,
  SetAvatarButton,
  DeleteButton,
};
