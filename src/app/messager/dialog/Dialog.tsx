import React from 'react';
import { Styled } from './styled';
import { UserInfo } from './UserInfo';
import { MessageInfo } from './MessageInfo';
import { IActionUser } from '../../store/User';
import { store } from '../../store';
import { deleteDialog, parseError } from '../../helpers';
import moment from 'moment';
import { IMessage } from '../../store/User';
interface Props {
  from: IActionUser;
  lastMessage?: IMessage;
  read: boolean;
  dialogId: string;
  owner: boolean;
}

export const Dialog = ({ from, lastMessage, read, dialogId, owner }: Props) => {
  const deleteHandler: React.MouseEventHandler = async (e) => {
    e.preventDefault();

    try {
      await deleteDialog(dialogId);
    } catch (error) {
      store.setError(parseError(error));
    }
  };

  return (
    <Styled.Dialog unread={owner ? false : !read}>
      <UserInfo
        name={from.name}
        avatar={from.userAvatar}
        lastMessage={lastMessage}
        owner={owner}
      />
      <Styled.MessageActions>
        {!!lastMessage?.date && (
          <MessageInfo
            time={moment(lastMessage.date).fromNow()}
            unread={owner ? !lastMessage.read : false}
          />
        )}
        <Styled.DeleteDialog>
          <span onClick={deleteHandler}>&times;</span>
        </Styled.DeleteDialog>
      </Styled.MessageActions>
    </Styled.Dialog>
  );
};
