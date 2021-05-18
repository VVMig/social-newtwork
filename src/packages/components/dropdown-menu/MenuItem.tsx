import React from 'react';

import { Item } from './interfaces';
import { Styled } from './styled';

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
