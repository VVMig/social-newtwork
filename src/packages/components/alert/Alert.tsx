import React from 'react';
import { Styled } from './styled';

interface Props {
  text: string;
  closeSign?: JSX.Element;
  closeFunc?: VoidFunction;
}

export const Alert = ({ text, closeSign, closeFunc }: Props) => {
  return (
    <Styled.Alert className="alert">
      {closeFunc && (
        <Styled.Close onClick={() => closeFunc()}>
          {closeSign || <>&times;</>}
        </Styled.Close>
      )}
      {text}
    </Styled.Alert>
  );
};
