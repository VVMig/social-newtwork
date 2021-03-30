import React from 'react';
import { ChatProps } from './interfaces';
import { Styled } from './styled';

export const Chat = ({ sendIcon }: ChatProps) => {
  return (
    <Styled.Chat>
      <Styled.MessagesContainer></Styled.MessagesContainer>
      <Styled.Form>
        <Styled.Input placeholder="Add your comment"></Styled.Input>
        <Styled.Button type="submit">{sendIcon}</Styled.Button>
      </Styled.Form>
    </Styled.Chat>
  );
};
