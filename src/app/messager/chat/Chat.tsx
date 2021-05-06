import React from 'react';
import { Styled } from './styled';
import { ChatHeader } from './ChatHeader';
import { ChatBody } from './ChatBody';
import { SendMessage } from './SendMessage';

export const Chat = () => {
  return (
    <Styled.Chat>
      <ChatHeader />
      <ChatBody />
      <SendMessage />
    </Styled.Chat>
  );
};
