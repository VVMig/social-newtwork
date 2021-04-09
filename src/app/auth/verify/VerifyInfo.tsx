import React from 'react';
import { Styled } from '../styled';
import { Icon } from '../../Icon';
import { IconType } from '../../IconEnum';

interface Props {
  email: string | null;
}

export const VerifyInfo = ({ email }: Props) => {
  return (
    <>
      <Styled.VerifyTitle>
        <Icon type={IconType.Email} />
      </Styled.VerifyTitle>
      <Styled.VerifyText>
        <p>Thanks for signing up. Confirm your email address</p>
        <p>{email} to activate your account.</p>
      </Styled.VerifyText>
    </>
  );
};
