import React, { useState } from 'react';
import { Styled } from '../styled';
import { Alert, Button, Spinner } from '../../../packages/components';
import { VerificationInfo } from './VerificationInfo';
import { parseError, refreshToken, signOut } from '../../helpers';

interface Props {
  className: string;
}

export const Verification = ({ className }: Props) => {
  const [resent, setResent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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
};
