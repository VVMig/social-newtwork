import React from 'react';
import { Styled } from './styled';

interface Props {
  text: string;
  closeSign?: JSX.Element;
  handleClose?: VoidFunction;
  className?: string;
}

export const Alert = ({ text, closeSign, handleClose, className }: Props) => {
  return (
    <Styled.Alert className={`alert ${className}`}>
      {handleClose && (
        <Styled.Close onClick={() => handleClose()}>
          {closeSign || <>&times;</>}
        </Styled.Close>
      )}
      {text}
    </Styled.Alert>
  );
};
