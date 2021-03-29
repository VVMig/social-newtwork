import React from 'react';
import { Styled } from './styled';
import { WidgetLive } from '../../packages/components';

interface Props {
  icon: JSX.Element;
}

export const Content = ({ icon }: Props) => {
  return (
    <Styled.Content>
      <WidgetLive viewIcon={icon} />
    </Styled.Content>
  );
};
