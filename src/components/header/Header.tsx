import React from 'react';

import { Navbar } from './Navbar';

import './Header.css';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <Navbar />
    </header>
  );
};
