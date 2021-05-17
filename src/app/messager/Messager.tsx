import React from 'react';

import { observer } from 'mobx-react-lite';

import { useQuery } from '../hooks';
import { RoutesEnum } from '../routes/RoutesEnum';
import { store } from '../store';
import { Chat } from './chat/Chat';
import { Dialog } from './dialog/Dialog';
import { Styled } from './styled';

export const Messager = observer(() => {
  const userIdQuery = useQuery('userId');

  return (
    <Styled.Messager>
      {!userIdQuery ? (
        <>
          {store.user.allDialogs.length ? (
            store.user.allDialogs.map((dialog, i) => (
              <Styled.Link
                to={`${RoutesEnum.Messager}?userId=${dialog.from._id}`}
                key={i}
              >
                <Dialog
                  from={dialog.from}
                  read={dialog.read}
                  lastMessage={dialog.lastMessage}
                  dialogId={dialog._id}
                  owner={dialog.lastMessage.from === store.user._id}
                />
              </Styled.Link>
            ))
          ) : (
            <Styled.EmptyDialogs>Start chat with someone</Styled.EmptyDialogs>
          )}
        </>
      ) : (
        <Chat userId={userIdQuery} />
      )}
    </Styled.Messager>
  );
});
