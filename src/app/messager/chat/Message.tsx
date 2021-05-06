import React from 'react';
import { Styled, IMessage } from './styled';

export const Message = (props: IMessage) => {
  return (
    <Styled.MessageWrapper {...props}>
      <Styled.Message></Styled.Message>
    </Styled.MessageWrapper>
  );
};
