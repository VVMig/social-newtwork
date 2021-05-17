import React, { useState } from 'react';

import { observer } from 'mobx-react-lite';

import { parseError, sendMessage } from '../../helpers';
import { Icon } from '../../Icon';
import { IconType } from '../../IconEnum';
import { store } from '../../store';
import { Styled } from './styled';

export const SendMessage = observer(() => {
  const [text, setText] = useState('');

  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const keySubmit: React.KeyboardEventHandler = (e) => {
    if (e.key === 'Enter' && !e.shiftKey && text) {
      sendMessageHandler(e);
    }
  };

  const sendMessageHandler: React.FormEventHandler = async (e) => {
    e.preventDefault();
    setText('');

    try {
      await sendMessage(text, store.dialog.commonId);
    } catch (error) {
      store.setError(parseError(error));
    }
  };

  return (
    <Styled.MessageInputWrapper>
      <Styled.MessageForm onSubmit={sendMessageHandler}>
        <Styled.MessageTextWrite
          value={text}
          onChange={changeHandler}
          onKeyPress={keySubmit}
        />
        <Styled.MessageSend>
          <Styled.MessageSendButton disabled={!text} type="submit">
            <Icon type={IconType.Send} />
          </Styled.MessageSendButton>
        </Styled.MessageSend>
      </Styled.MessageForm>
    </Styled.MessageInputWrapper>
  );
});
