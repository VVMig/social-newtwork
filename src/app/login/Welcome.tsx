import React from 'react';
import { WelcomeProps } from './interfaces';
import { Styled } from './styled';
import { WelcomeContent } from './WelcomeContent';
import { Button } from './Button';

export const Welcome = ({ signIn, handler }: WelcomeProps) => {
  return (
    <>
      <Styled.SwitchContent signIn={signIn}>
        <Styled.LeftContent signIn={signIn}>
          <WelcomeContent
            title="Welcome back!"
            subtitle="Enter your personal details and start journey us"
          />
        </Styled.LeftContent>
        <Button signIn={signIn} handler={handler} />
        <Styled.RightContent signIn={signIn}>
          <WelcomeContent
            title="Hello, friend!"
            subtitle="Enter your personal details and start journey us"
          />
        </Styled.RightContent>
      </Styled.SwitchContent>
    </>
  );
};
