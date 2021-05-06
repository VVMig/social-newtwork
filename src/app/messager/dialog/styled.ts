import styled, { css } from 'styled-components';
import {
  Avatar as UserAvatar,
  Dot,
  zIndex,
} from '../../../packages/components';

interface DialogRead {
  unread?: boolean;
}

const DeleteDialog = styled.div`
  padding-left: 10px;
  color: ${(props) => props.theme.additionalDarkGrey};
  font-size: 24px;
  opacity: 0;
`;

const MessageActions = styled.div`
  display: flex;
  padding-right: 10px;
`;

const Dialog = styled.div<DialogRead>`
  width: 100%;
  display: flex;
  padding: 5px 0 5px 20px;
  border-top: 2px solid ${(props) => props.theme.darkBlue};
  background-color: ${(props) => props.theme.mainBackground};
  justify-content: space-between;
  ${(props) =>
    props.unread &&
    css`
      background-color: ${props.theme.additionalLightGrey};
    `}
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.additionalLightGrey};
    transition: 0.2s linear;
    ${DeleteDialog} {
      transition: opacity 0.2s linear;
      opacity: 1;
    }
  }
`;

const UserInfo = styled.div`
  display: flex;
`;

const Avatar = styled(UserAvatar)`
  width: 50px;
  height: 50px;
  z-index: ${zIndex.messageAvatar};
`;

const DialogName = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3px 15px 0 10px;
  overflow: hidden;
  max-width: 500px;
`;

const UserName = styled.span`
  text-transform: capitalize;
  font-size: 15px;
  font-weight: bold;
  color: ${(props) => props.theme.black};
`;

const LastMessage = styled.div`
  padding-top: 5px;
  color: ${(props) => props.theme.additionalDarkGrey};
`;

const MessageInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MessageTime = styled.span`
  color: ${(props) => props.theme.additionalDarkGrey};
  font-size: 12px;
  padding-top: 2px;
`;

const MessageIndicator = styled(Dot)`
  font-size: 24px;
  padding-top: 15px;
`;

export const Styled = {
  DeleteDialog,
  MessageTime,
  Dialog,
  Avatar,
  UserInfo,
  DialogName,
  UserName,
  LastMessage,
  MessageInfo,
  MessageIndicator,
  MessageActions,
};
