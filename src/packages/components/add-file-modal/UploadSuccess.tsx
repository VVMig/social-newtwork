import React from 'react';
import { Styled } from './styled';

interface Props {
  successIcon: JSX.Element;
}

export const UploadSuccess = React.memo(
  ({ successIcon }: Props) => {
    return <Styled.UploadSuccess>{successIcon}</Styled.UploadSuccess>;
  },
  () => true
);
