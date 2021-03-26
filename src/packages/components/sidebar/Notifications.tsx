import styled from 'styled-components';
import React from 'react';

interface Props {
  icon: JSX.Element;
}

const Notification = styled.div`
  align-self: end;
`;

export const Notifications = ({ icon }: Props) => {
  return <Notification>{icon}</Notification>;
};
