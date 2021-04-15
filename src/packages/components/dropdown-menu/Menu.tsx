import React from 'react';
import { Styled } from './styled';
import { MenuProps } from './interfaces';
import { MenuList } from './MenuList';
import { CSSTransition } from 'react-transition-group';

export const Menu = ({ className, items, show, showDelay }: MenuProps) => {
  const defaultDelay = 200;

  return (
    <CSSTransition
      in={show}
      timeout={showDelay || defaultDelay}
      classNames={className}
      unmountOnExit
    >
      <Styled.Menu className={className} delay={showDelay || defaultDelay}>
        <MenuList items={items} />
      </Styled.Menu>
    </CSSTransition>
  );
};
