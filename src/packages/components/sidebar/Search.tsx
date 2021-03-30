import React from 'react';
import { Search as SearchIcon } from '@material-ui/icons';
import { Styled } from './styled';

export const Search = () => {
  return (
    <Styled.Form>
      <Styled.Input type="text" placeholder="Search" />
      <Styled.Button type="submit">
        <SearchIcon />
      </Styled.Button>
    </Styled.Form>
  );
};
