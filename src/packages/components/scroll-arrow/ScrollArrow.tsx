import React from 'react';

import { Styled } from './styled';

interface Props extends React.HTMLProps<HTMLDivElement> {
  icon: JSX.Element;
}

export const ScrollArrow: React.FC<Props> = ({ className, icon, onClick }) => {
  return (
    <Styled.ScrollArrow className={className} onClick={onClick}>
      {icon}
    </Styled.ScrollArrow>
  );
};
