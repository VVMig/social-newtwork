import React from 'react';

import { Avatar } from '../avatar';
import { Styled } from './styled';

interface Props {
  src: string;
  name: string;
}

export const Info: React.FC<Props> = ({ src, name }) => {
  return (
    <Styled.Info>
      <Avatar src={src} name={name} />
      <Styled.Name>
        <h3>{name}</h3>
      </Styled.Name>
    </Styled.Info>
  );
};
