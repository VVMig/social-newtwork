import React from 'react';
import { ChatProps } from './interfaces';
import { Styled } from './styled';
import { Message } from './Message';

export const Chat = ({ sendIcon }: ChatProps) => {
  return (
    <Styled.Chat>
      <Styled.MessagesContainer>
        <Message
          text="asdasdasdasd"
          displayName="Vova Migay"
          date={Date.now()}
          route="#"
        />
      </Styled.MessagesContainer>
      <Styled.Form>
        <Styled.Input placeholder="Add your comment"></Styled.Input>
        <Styled.Button type="submit">{sendIcon}</Styled.Button>
      </Styled.Form>
    </Styled.Chat>
  );
};
