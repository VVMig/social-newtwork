import React from 'react';
import { Styled } from './styled';
import { Icon } from '../../Icon';
import { IconType } from '../../IconEnum';
import { RoutesEnum } from '../../routes/RoutesEnum';

export const ChatHeader = () => {
  return (
    <Styled.ChatHeader>
      <Styled.GoBack>
        <Styled.GoBackLink to={RoutesEnum.Messager}>
          <Icon type={IconType.CloseArrow} />
          Go back
        </Styled.GoBackLink>
      </Styled.GoBack>
      <Styled.ChatTitle>JASdkl</Styled.ChatTitle>
      <Styled.ChatAvatar />
    </Styled.ChatHeader>
  );
};
