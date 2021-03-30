import React from 'react';
import { Styled } from './styled';
import { WidgetLive } from '../../packages/components';

interface Props {
  viewIcon: JSX.Element;
  sendIcon: JSX.Element;
}

export const Content = ({ viewIcon, sendIcon }: Props) => {
  return (
    <Styled.Content>
      <WidgetLive viewIcon={viewIcon} sendIcon={sendIcon} />
    </Styled.Content>
  );
};
