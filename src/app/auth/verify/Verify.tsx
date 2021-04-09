import React, { useState } from 'react';
import { Styled } from '../styled';
import { user } from '../../store/User';
import { Alert, Button, Spinner } from '../../../packages/components';
import { observer } from 'mobx-react-lite';
import { VerifyInfo } from './VerifyInfo';

export const Verify = observer(() => {
  const [resent, setResent] = useState(false);

  const signOut: React.MouseEventHandler = () => {
    user.signOut();
  };

  const sendEmail: React.MouseEventHandler = async () => {
    await user.refreshToken();
    setResent(true);
  };

  return (
    <Styled.Verify>
      {user.loading && <Spinner />}
      {resent && <Alert text="Email succesfully resent" />}
      <Styled.VerifyContainer>
        <VerifyInfo email={user.current.email} />
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
