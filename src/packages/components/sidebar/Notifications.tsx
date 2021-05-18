import React from 'react';

import { Dot } from '../dot/Dot';
import { Styled } from './styled';

interface Props {
  icon: JSX.Element;
  notify?: boolean;
  clickHandler?: React.MouseEventHandler;
}

export const Notifications = ({ icon, notify, clickHandler }: Props) => {
  return (
    <Styled.NotificationsWrapper>
      <Styled.Notifications onClick={clickHandler}>
        {icon}
        {notify && (
          <>
            <Styled.Notify>
              <Dot />
            </Styled.Notify>
          </>
        )}
      </Styled.Notifications>
    </Styled.NotificationsWrapper>
  );
};
