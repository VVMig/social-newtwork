import React from 'react';
import { Item } from './interfaces';
import { Styled } from './styled';
import { MenuItem } from './MenuItem';

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
