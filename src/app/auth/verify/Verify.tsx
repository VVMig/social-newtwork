import React, { useState } from 'react';
import { Styled } from '../styled';
import { store } from '../../store';
import { Alert, Button, Spinner } from '../../../packages/components';
import { observer } from 'mobx-react-lite';
import { VerifyInfo } from './VerifyInfo';

interface Props {
  className: string;
}

export const Verify = observer(({ className }: Props) => {
  const [resent, setResent] = useState(false);

  const signOut: React.MouseEventHandler = () => {
    store.user.signOut();
  };

  const sendEmail: React.MouseEventHandler = async () => {
    await store.user.refreshToken();
    setResent(true);
  };

  return (
    <Styled.Verify className={className}>
      {store.user.loading && <Spinner />}
      {resent && <Alert text="Email succesfully resent" />}
      <Styled.VerifyContainer>
        <VerifyInfo email={store.user.current.email} />
        <Styled.ResendBtn resent={resent} disabled={resent} onClick={sendEmail}>
          Resend email
        </Styled.ResendBtn>
        <Styled.SignOut>
          <Button handler={signOut}>
            <Styled.BtnText>Sign out</Styled.BtnText>
          </Button>
        </Styled.SignOut>
      </Styled.VerifyContainer>
    </Styled.Verify>
  );
});
