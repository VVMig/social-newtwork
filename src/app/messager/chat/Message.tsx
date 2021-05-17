import React from 'react';

import { IMessage,Styled } from './styled';

interface Props extends IMessage {
  text: string;
  unread: boolean;
}

export const Message = ({ text, ...props }: Props) => {
  return (
    <Styled.MessageWrapper {...props}>
      <Styled.Message>{text}</Styled.Message>
    </Styled.MessageWrapper>
  );
};
