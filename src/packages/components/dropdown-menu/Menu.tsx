import React from 'react';

import { CSSTransition } from 'react-transition-group';

import { MenuProps } from './interfaces';
import { MenuList } from './MenuList';
import { Styled } from './styled';

export const Menu = ({ className, items, show, showDelay }: MenuProps) => {
  const defaultDelay = 200;

  return (
    <CSSTransition
      in={show}
      timeout={showDelay || defaultDelay}
      classNames={className}
      mountOnEnter
      unmountOnExit
    >
      <Styled.Menu className={className} delay={showDelay || defaultDelay}>
        <MenuList items={items} />
      </Styled.Menu>
    </CSSTransition>
  );
};
