import React from 'react';
import { Search as SearchIcon } from '@material-ui/icons';
import { Button, Form, Input } from './Styled';

export const Search = () => {
  return (
    <Form>
      <Input type="text" placeholder="Search" />
      <Button type="submit">
        <SearchIcon />
      </Button>
    </Form>
  );
};
