import React from 'react';
import { Styled } from './styled';
import { Icon } from '../../Icon';
import { IconType } from '../../IconEnum';

export const SendMessage = () => {
  return (
    <Styled.MessageInputWrapper>
      <Styled.MessageForm>
        <Styled.MessageTextWrite contentEditable={true} />
        <Styled.MessageSend>
          <Styled.MessageSendButton>
            <Icon type={IconType.Send} />
          </Styled.MessageSendButton>
        </Styled.MessageSend>
      </Styled.MessageForm>
    </Styled.MessageInputWrapper>
  );
};
