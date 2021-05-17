import React from 'react';

import { Item } from './interfaces';
import { MenuItem } from './MenuItem';
import { Styled } from './styled';

interface Props {
  items: Item[];
}

export const MenuList = ({ items }: Props) => {
  return (
    <Styled.List>
      {items.map((item, i) => (
        <MenuItem {...item} key={i} />
      ))}
    </Styled.List>
  );
};
