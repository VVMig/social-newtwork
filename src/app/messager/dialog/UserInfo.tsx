import React from 'react';

import { IMessage } from '../../store/User';
import { Styled } from './styled';

interface Props {
  avatar: string;
  name: string;
  lastMessage?: IMessage;
  owner: boolean;
}

export const UserInfo = ({ avatar, name, lastMessage, owner }: Props) => {
  return (
    <Styled.UserInfo>
      <Styled.Avatar src={avatar} name={name} />
      <Styled.DialogName>
        <Styled.UserName>{name}</Styled.UserName>
        <Styled.LastMessage>
          {lastMessage?.text ? (
            <span>
              {owner && 'You: '}
              {lastMessage.text}
            </span>
          ) : (
            'Start messaging...'
          )}
        </Styled.LastMessage>
      </Styled.DialogName>
    </Styled.UserInfo>
  );
};
