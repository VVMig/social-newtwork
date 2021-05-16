import React, { useEffect, useState } from 'react';
import { Styled } from './styled';
import { ChatHeader } from './ChatHeader';
import { ChatBody } from './ChatBody';
import { SendMessage } from './SendMessage';
import { observer } from 'mobx-react-lite';
import { getDialog, parseError } from '../../helpers';
import { store } from '../../store';
import useWebSocket from 'react-use-websocket';
import { wsUrl } from '../../url';
import { wsActions } from '../../wsreducer';
import { WSEvents } from '../../wsreducer/WSEvents';
interface Props {
  userId: string;
}

export const Chat = observer(({ userId }: Props) => {
  const [loading, setLoading] = useState(true);
  const { lastJsonMessage, sendMessage } = useWebSocket(`${wsUrl}/room`);

  const sendDialogCommonId = () => {
    const request = JSON.stringify({
      type: WSEvents.RoomConnect,
      payload: {
        roomId: store.dialog._id,
      },
    });
    sendMessage(request);
  };

  useEffect(() => {
    if (lastJsonMessage) {
      wsActions(lastJsonMessage);
    }
  }, [lastJsonMessage]);

  const getDialogInfo = async () => {
    try {
      setLoading(true);
      const dialog = await getDialog(userId);

      store.setDialog(dialog);
      sendDialogCommonId();
    } catch (error) {
      store.setError(parseError(error));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDialogInfo();
  }, [userId]);

  return (
    <Styled.Chat>
      <ChatHeader loading={loading} />
      <ChatBody loading={loading} />
      <SendMessage />
    </Styled.Chat>
  );
});
