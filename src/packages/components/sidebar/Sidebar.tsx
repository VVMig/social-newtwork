import React from 'react';
import { Styled, delay } from './styled';
import { Transition } from 'react-transition-group';

interface Props {
  showSidebar: boolean;
}

export const Sidebar: React.FC<Props> = ({ children, showSidebar }) => {
  return (
    <>
      <Transition in={showSidebar} timeout={delay} unmountOnExit mountOnEnter>
        {(state) => <Styled.Aside className={state}>{children}</Styled.Aside>}
      </Transition>
    </>
  );
};
