import React from 'react';
import { Search } from './Search';
import { Logo } from './Logo';
import { YourGroups } from '../groups/YourGroups';
import { FriendsList } from '../friends/FriendsList';
import './Sidebar.css';

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <Logo />
        <Search />
      </div>
      <div className="sidebar-content">
        <YourGroups />
        <FriendsList />
      </div>
    </aside>
  );
};
