import React from 'react';

import { MessageProps } from './interfaces';
import { Styled } from './styled';
interface Props extends MessageProps {
  text: string;
  unread: boolean;
}

export const Message = ({ text, unread, owner }: Props) => {
  return (
    <Styled.MessageWrapper unread={unread} owner={owner}>
      <Styled.Message>{text}</Styled.Message>
    </Styled.MessageWrapper>
  );
};
