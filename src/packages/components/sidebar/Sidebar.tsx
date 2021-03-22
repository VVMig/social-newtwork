import React from 'react';
import { Search } from './Search';
import { Logo } from './Logo';
import { Widget } from '../sidebar-widget/Widget';
import './Sidebar.css';
import { WidgetFields } from '../sidebar-widget/interfaces';

interface Props {
  friends: WidgetFields[];
  groups: WidgetFields[];
}

export const Sidebar = ({ friends, groups }: Props) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <Logo />
        <Search />
      </div>
      <div className="sidebar-content">
        <Widget title={'Groups'} items={groups} />
        <Widget title={'Friends'} items={friends} />
      </div>
    </aside>
  );
};
