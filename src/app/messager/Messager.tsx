import React from 'react';
import { Styled } from './styled';
import { Dialog } from './dialog/Dialog';
import { useQuery } from '../hooks';
import { Chat } from './chat/Chat';
import { RoutesEnum } from '../routes/RoutesEnum';

export const Messager = () => {
  const query = useQuery('room');

  return (
    <Styled.Messager>
      {!query ? (
        <>
          <Styled.Link to={`${RoutesEnum.Messager}?room=123`}>
            <Dialog />
          </Styled.Link>
        </>
      ) : (
        <Chat />
      )}
    </Styled.Messager>
  );
};
