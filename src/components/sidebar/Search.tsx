import React from 'react';
import { Search as SearchIcon } from '@material-ui/icons';
import './Search.css';

export const Search: React.FC = () => {
  return (
    <form className="sidebar-search">
      <input
        type="text"
        className="sidebar-search-input"
        placeholder="Search"
      />
      <button type="submit">
        <SearchIcon />
      </button>
    </form>
  );
};
