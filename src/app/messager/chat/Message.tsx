import React from 'react';

import { MessageProps } from './interfaces';
import { Styled } from './styled';
interface Props extends MessageProps {
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
