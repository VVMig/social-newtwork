import React from 'react';
import { store } from './store';
import { AuthContent } from './AuthContent';
import { Styled } from './styled';

export const AuthContentProvider: React.FC = ({ children }) => {
  return (
    <>
      {store.isUserSet && store.user.verified ? (
        <Styled.Wrapper auth>
          <AuthContent>{children}</AuthContent>
        </Styled.Wrapper>
      ) : (
        <Styled.Wrapper common>
          <Styled.Content>
            <Styled.ContentWidth>{children}</Styled.ContentWidth>
          </Styled.Content>
        </Styled.Wrapper>
      )}
    </>
  );
};
