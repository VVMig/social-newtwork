import React from 'react';
import { Styled } from './styled';

interface Props {
  failedIcon: JSX.Element;
}

export const UploadFailed = ({ failedIcon }: Props) => {
  return <Styled.UploadFailed>{failedIcon}</Styled.UploadFailed>;
};
