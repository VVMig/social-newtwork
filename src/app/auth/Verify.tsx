import React, { useState } from 'react';
import { Styled } from './styled';
import { user } from '../store/User';
import { Icon } from '../Icon';
import { IconType } from '../IconEnum';
import { Alert, Button, Spinner } from '../../packages/components';
import { observer } from 'mobx-react-lite';

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
        <Styled.VerifyTitle>
          <Icon type={IconType.Email} />
        </Styled.VerifyTitle>
        <Styled.VerifyText>
          <p>Thanks for signing up. Confirm your email address</p>
          <p>{user.current.email} to activate your account.</p>
        </Styled.VerifyText>
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
