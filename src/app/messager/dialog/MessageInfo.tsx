import React from 'react';

import { Styled } from './styled';

interface Props {
  time: string;
  unread: boolean;
}

export const MessageInfo = ({ time, unread }: Props) => {
  return (
    <Styled.MessageInfo>
      <Styled.MessageTime>{time}</Styled.MessageTime>
      {unread && <Styled.MessageIndicator />}
    </Styled.MessageInfo>
  );
};
