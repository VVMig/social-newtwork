import React, { useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router';
import useWebSocket from 'react-use-websocket';

import { Alert, Button, Spinner } from '../../../packages/components';
import { parseError, refreshToken, signOut } from '../../helpers';
import { RoutesEnum } from '../../routes/RoutesEnum';
import { store } from '../../store';
import { wsUrl } from '../../url';
import { wsActions } from '../../wsreducer';
import { Styled } from '../styled';
import { VerificationInfo } from './VerificationInfo';
interface Props {
  className: string;
}

export const Verification = observer(({ className }: Props) => {
  const [resent, setResent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();
  const { lastJsonMessage, sendMessage } = useWebSocket(
    `${wsUrl}/verification`,
    {
      onOpen: () => sendCurrentUser(),
    }
  );

  useEffect(() => {
    lastJsonMessage && wsActions(lastJsonMessage);
  }, [lastJsonMessage]);

  useEffect(() => {
    if (store.user.verified) history.push(RoutesEnum.Home);
  }, [store.user.verified]);

  const sendCurrentUser = () => {
    sendMessage(`${store.user._id}`);
  };

  const signOutHandler: React.MouseEventHandler = async () => {
    try {
      setLoading(true);

      await signOut();
    } catch (error) {
      setError(parseError(error));
    } finally {
      setLoading(false);
    }
  };

  const sendEmail: React.MouseEventHandler = async () => {
    try {
      setLoading(true);

      await refreshToken();

      setResent(true);
    } catch (error) {
      setError(parseError(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Styled.Verification className={className}>
      {loading && <Spinner />}
      {resent && <Alert text="Email succesfully resent" />}
      {error && <Alert text={error} />}
      <Styled.VerificationContainer>
        <VerificationInfo />
        <Styled.ResendBtn resent={resent} disabled={resent} onClick={sendEmail}>
          Resend email
        </Styled.ResendBtn>
        <Styled.SignOut>
          <Button clickHandler={signOutHandler}>
            <Styled.BtnText>Sign out</Styled.BtnText>
          </Button>
        </Styled.SignOut>
      </Styled.VerificationContainer>
    </Styled.Verification>
  );
});
