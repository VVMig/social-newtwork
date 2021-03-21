import React from 'react';
import { Search } from './Search';
import { Logo } from './Logo';
import { Widget } from '../sidebar-widget/Widget'
import './Sidebar.css';

export const Sidebar = () => {

  console.log('rerender')

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <Logo />
        <Search />
      </div>
      <div className="sidebar-content">
        <Widget />
        <Widget />
      </div>
    </aside>
  );
};
