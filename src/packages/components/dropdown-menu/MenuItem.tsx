import React from 'react';
import { Styled } from './styled';
import { Item } from './interfaces';

export const MenuItem = ({ title, link, actionHandler, icon }: Item) => {
  const clickHandler: React.MouseEventHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    actionHandler && actionHandler(event);
  };

  return (
    <Styled.MenuItem onClick={clickHandler}>
      {link ? (
        <Styled.Link to={link}>
          {icon}
          <Styled.Title>{title}</Styled.Title>
        </Styled.Link>
      ) : (
        <>
          {icon}
          <Styled.Title>{title}</Styled.Title>
        </>
      )}
    </Styled.MenuItem>
  );
};
