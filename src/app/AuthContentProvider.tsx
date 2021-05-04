import React from 'react';
import { store } from './store';
import { AuthContent } from './AuthContent';
import { Styled } from './styled';
import { observer } from 'mobx-react-lite';

export const AuthContentProvider: React.FC = observer(({ children }) => {
  const closeAlert = () => {
    store.resetError();
  };

  return (
    <>
      {store.error && (
        <Styled.GlobalAlert text={store.error} handleClose={closeAlert} />
      )}
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
});
