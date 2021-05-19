import React, { useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router';
import useWebSocket from 'react-use-websocket';

import { Spinner } from '../../packages/components';
import { store } from '../store';
import { wsUrl } from '../url';
import { wsActions } from '../wsreducer';
import { Params } from './interfaces';
import { ProfileInfo } from './ProfileInfo';
import { ProfileMain } from './ProfileMain';
import { Styled } from './styled';

export const Profile = observer(() => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams<Params>();
  const { lastJsonMessage, sendMessage } = useWebSocket(`${wsUrl}/profile`, {
    shouldReconnect: () => true,
  });

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
