import React from 'react';

import { Navbar } from './Navbar';
import { TabProps } from './interfaces';

import './Header.css';

export const Header = ({ tabs }: TabProps) => {
  return (
    <header className="header">
      <Navbar tabs={tabs} />
    </header>
  );
};
