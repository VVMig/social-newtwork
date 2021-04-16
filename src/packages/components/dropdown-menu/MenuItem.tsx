import React from 'react';
import { Styled } from './styled';
import { Item } from './interfaces';

export const MenuItem = ({ title, link, actionHandler, icon }: Item) => {
  return (
    <Styled.MenuItem onClick={actionHandler}>
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
