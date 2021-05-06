import styled, { css } from 'styled-components';
import { Link as StyledLink } from 'react-router-dom';
import { Avatar, Button } from '../../../packages/components';

export interface IMessage {
  owner?: boolean;
  requestNow?: boolean;
}

const Chat = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

const ChatHeader = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.additionalLightGrey};
  width: 100%;
  border-radius: 10px 10px 0 0;
  padding: 5px 20px;
  align-items: center;
  justify-content: space-between;
`;

const GoBack = styled.div`
  color: ${(props) => props.theme.darkBlue};

  &:hover {
    color: ${(props) => props.theme.additionalDarkGrey};
    transition: 0.2s linear;
  }

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & svg {
    width: 20px;
    height: 20px;
  }
`;

const GoBackLink = styled(StyledLink)`
  color: inherit;
  text-decoration: none;
  display: flex;
`;

const ChatTitle = styled.h2`
  padding-right: 45px;
  font-size: 15px;
  color: ${(props) => props.theme.greyDark};
`;

const ChatAvatar = styled(Avatar)`
  width: 30px;
  height: 30px;
`;

const ChatBody = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  height: calc(100vh * 0.6);
  overflow: auto;
`;

const Message = styled.div`
  max-width: 50%;
  border-radius: 5px 20px 20px;
  padding: 10px;
  background-color: ${(props) => props.theme.additionalDarkBlue};
  word-wrap: break-word;
  font-size: 16px;
`;

const MessageWrapper = styled.div<IMessage>`
  display: flex;
  width: 100%;
  color: ${(props) => props.theme.light};
  padding-bottom: 10px;

  ${(props) =>
    props.owner &&
    css`
      justify-content: flex-end;
      padding-right: 2px;

      ${Message} {
        background-color: ${props.theme.additionalDarkBlue};
        border-radius: 20px 5px 20px 20px;
        color: ${props.theme.additionalDarkGrey};
        background-color: ${props.theme.additionalLightGrey};
      }
    `}
`;

const MessageInputWrapper = styled.div`
  width: 100%;
  padding: 5px 20px;
  background-color: ${(props) => props.theme.additionalLightGrey};
  position: absolute;
  bottom: -50px;
`;

const MessageForm = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const MessageTextWrite = styled.div`
  background-color: ${(props) => props.theme.light};
  color: ${(props) => props.theme.additionalDarkGrey};
  font-size: 15px;
  border: 1px solid ${(props) => props.theme.additionalGrey};
  border-radius: 10px;
  padding: 5px 10px;
  resize: none;
  width: 100%;
  overflow: auto;
  word-wrap: break-word;
  max-height: 100px;

  &:focus {
    outline: 0;
  }
`;

const MessageSend = styled.div`
  padding-left: 10px;
`;

const MessageSendButton = styled(Button)`
  padding: 0;
  border-radius: 0;
  font-size: 10px;
  border: 0;
  width: min-content;

  color: ${(props) => props.theme.additionalGrey};

  & svg {
    width: 30px;
    height: 30px;
  }
`;

export const Styled = {
  MessageSend,
  Chat,
  ChatHeader,
  GoBack,
  GoBackLink,
  ChatTitle,
  ChatAvatar,
  ChatBody,
  MessageWrapper,
  Message,
  MessageInputWrapper,
  MessageForm,
  MessageTextWrite,
  MessageSendButton,
};
