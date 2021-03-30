import React from 'react';
import { Avatar } from '../avatar';
import { MessageProps } from './interfaces';
import { Styled } from './styled';

export const Message = ({ text, displayName, date, route }: MessageProps) => {
  const time = new Date(date).toLocaleTimeString(navigator.language, {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <Styled.Message>
      <Styled.MainInfo>
        <Avatar size={32} route={route} />
        <Styled.Content>
          <Styled.Name>{displayName}</Styled.Name>
          <Styled.Text>{text}</Styled.Text>
        </Styled.Content>
      </Styled.MainInfo>
      <Styled.Time>{time}</Styled.Time>
    </Styled.Message>
  );
};
