import React, { useEffect, useState } from 'react';
import { Styled } from './styled';
import { ProfileMain } from './ProfileMain';
import { ProfileInfo } from './ProfileInfo';
import { Params } from './interfaces';
import { getProfile, parseError } from '../helpers';
import { useParams } from 'react-router';
import { Spinner } from '../../packages/components';
import { store } from '../store';
import { observer } from 'mobx-react-lite';
import useWebSocket from 'react-use-websocket';
import { wsUrl } from '../url';
import { wsActions } from '../wsreducer';

export const Profile = observer(() => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { id } = useParams<Params>();
  const { lastJsonMessage, sendMessage } = useWebSocket(`${wsUrl}/profile`, {
    onOpen: () => sendCurrentProfile(),
  });

  const sendCurrentProfile = () => {
    sendMessage(id);
  };

  useEffect(() => {
    lastJsonMessage && wsActions(lastJsonMessage);
  }, [lastJsonMessage]);

  const getProfileUser = async () => {
    try {
      await getProfile(id);
      setError('');
    } catch (error) {
      setError(parseError(error));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfileUser();
  }, [id]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Styled.Profile>
          {store.isProfileSet && !error ? (
            <>
              <ProfileMain updateUser={getProfileUser} />
              <ProfileInfo />
            </>
          ) : (
            error
          )}
        </Styled.Profile>
      )}
    </>
  );
});
