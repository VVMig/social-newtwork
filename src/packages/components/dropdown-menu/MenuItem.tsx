import React from 'react';
import { Styled } from './styled';
import { Item } from './interfaces';

export const MenuItem = ({ title, link, actionHandler, icon }: Item) => {
  return (
    <>
      {link ? (
        <Styled.Link to={link}>
          <Styled.MenuItem onClick={actionHandler}>
            {icon}
            <Styled.Title>{title}</Styled.Title>
          </Styled.MenuItem>
        </Styled.Link>
      ) : (
        <Styled.MenuItem onClick={actionHandler}>
          {icon}
          <Styled.Title>{title}</Styled.Title>
        </Styled.MenuItem>
      )}
    </>
  );
};
