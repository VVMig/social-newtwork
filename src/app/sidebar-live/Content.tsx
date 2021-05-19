import React, { RefObject } from 'react';

import { observer } from 'mobx-react-lite';
import { Transition } from 'react-transition-group';

import { store } from '../store';
import { Styled, scrollAnimationDuration } from './styled';

interface Props {
  contentRef: RefObject<HTMLDivElement>;
}

export const Content: React.FC<Props> = observer(({ contentRef }) => {
  const scrollLimit = 800;

  const toTopClickHandler: React.MouseEventHandler = () => {
    if (contentRef.current) {
      contentRef.current.scroll({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Styled.Content>
      <Transition
        in={store.pageScrolling.scrollTop > scrollLimit}
        timeout={scrollAnimationDuration}
      >
        {(state) => (
          <Styled.ScrollToTop className={state} onClick={toTopClickHandler}>
            Scroll to top
          </Styled.ScrollToTop>
        )}
      </Transition>
    </Styled.Content>
  );
});
