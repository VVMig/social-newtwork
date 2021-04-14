import React from 'react';
import { Styled } from './styled';

interface Props {
  text: string;
  closeSign?: JSX.Element;
  handleClose?: VoidFunction;
}

export const Alert = ({ text, closeSign, handleClose }: Props) => {
  return (
    <Styled.Alert className="alert">
      {handleClose && (
        <Styled.Close onClick={() => handleClose()}>
          {closeSign || <>&times;</>}
        </Styled.Close>
      )}
      {text}
    </Styled.Alert>
  );
};
