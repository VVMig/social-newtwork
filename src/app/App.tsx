import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../packages/components/header/Header';
import { Sidebar } from '../packages/components/sidebar/Sidebar';
import { tabs } from './tabs';
import { friends } from './friends';
import { groups } from './groups';
import './App.css';

export const App = () => {
  return (
    <BrowserRouter>
      <Header tabs={tabs} />
      <Sidebar friends={friends} groups={groups} />
    </BrowserRouter>
  );
};
