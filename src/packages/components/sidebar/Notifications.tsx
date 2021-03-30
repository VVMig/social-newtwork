import React from 'react';
import { Dot } from '../dot/Dot';
import { Styled } from './styled';

interface Props {
  icon: JSX.Element;
  notify?: boolean;
}

export const Notifications = ({ icon, notify }: Props) => {
  return (
    <Styled.NotificationsWrapper>
      <Styled.Notifications>
        {icon}
        {notify && (
          <Styled.Notify>
            <Dot />
          </Styled.Notify>
        )}
      </Styled.Notifications>
    </Styled.NotificationsWrapper>
  );
};
