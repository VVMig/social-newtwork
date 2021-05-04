import React, { useEffect, useState } from 'react';
import { Styled } from './styled';
import { ProfileMain } from './ProfileMain';
import { ProfileInfo } from './ProfileInfo';
import { Params } from './interfaces';
import { useParams } from 'react-router';
import { Spinner } from '../../packages/components';
import { store } from '../store';
import { observer } from 'mobx-react-lite';
import useWebSocket from 'react-use-websocket';
import { wsUrl } from '../url';
import { wsActions } from '../wsreducer';

export const Profile = observer(() => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams<Params>();
  const { lastJsonMessage, sendMessage } = useWebSocket(`${wsUrl}/profile`);

  const sendCurrentProfile = () => {
    sendMessage(id);
  };

  useEffect(() => {
    if (lastJsonMessage) {
      wsActions(lastJsonMessage);
      setLoading(false);
    }
  }, [lastJsonMessage]);

  useEffect(() => {
    sendCurrentProfile();
    setLoading(true);
  }, [id]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Styled.Profile>
          {store.isProfileSet && (
            <>
              <ProfileMain />
              <ProfileInfo />
            </>
          )}
        </Styled.Profile>
      )}
    </>
  );
});
