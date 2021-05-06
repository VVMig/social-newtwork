import React from 'react';
import { Styled } from './styled';
import { UserInfo } from './UserInfo';
import { MessageInfo } from './MessageInfo';

export const Dialog = () => {
  const deleteHandler: React.MouseEventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Styled.Dialog>
      <UserInfo />
      <Styled.MessageActions>
        <MessageInfo time={'12:03'} unread={true} />
        <Styled.DeleteDialog>
          <span onClick={deleteHandler}>&times;</span>
        </Styled.DeleteDialog>
      </Styled.MessageActions>
    </Styled.Dialog>
  );
};
