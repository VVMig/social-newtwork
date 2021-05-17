import React from 'react';

import { observer } from 'mobx-react-lite';

import { AuthContent } from './AuthContent';
import { store } from './store';
import { Styled } from './styled';

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
