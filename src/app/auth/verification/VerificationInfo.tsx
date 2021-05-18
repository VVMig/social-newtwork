import React from 'react';

import { Icon } from '../../Icon';
import { IconType } from '../../IconEnum';
import { store } from '../../store';
import { Styled } from '../styled';

export const VerificationInfo = () => {
  return (
    <>
      <Styled.VerificationTitle>
        <Icon type={IconType.Email} />
      </Styled.VerificationTitle>
      <Styled.VerificationText>
        <p>Thanks for signing up. Confirm your email address</p>
        <p>{store.user?.email} to activate your account.</p>
      </Styled.VerificationText>
    </>
  );
};
