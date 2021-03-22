import React from 'react';
import { Search } from './Search';
import { Logo } from './Logo';
import { Widget } from '../sidebar-widget/Widget'
import './Sidebar.css';
import { WidgetItemFields } from '../sidebar-widget/interfaces';

const groups: WidgetItemFields[] = [
  {
    communityName: 'Sketch Comunnity',
    route: '#',
  },
  {
    communityName: 'Sketch Comunnity',
    route: '#',
  },
  {
    communityName: 'Sketch Comunnity',
    route: '#',
  },
  {
    communityName: 'Sketch Comunnity',
    route: '#',
  },
];

const friends: WidgetItemFields[] = [
  {
    firstName: 'Eleanor',
    lastName: 'Pena',
    lastVisit: 0,
    online: true,
    route: '#',
  },
  {
    firstName: 'Eleanor',
    lastName: 'Pena',
    lastVisit: 0,
    online: true,
    route: '#',
  },
  {
    firstName: 'Eleanor',
    lastName: 'Pena',
    lastVisit: 11,
    online: false,
    route: '#',
  },
  {
    firstName: 'Eleanor',
    lastName: 'Pena',
    lastVisit: 0,
    online: true,
    route: '#',
  },
];

export const Sidebar = () => {

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <Logo />
        <Search />
      </div>
      <div className="sidebar-content">
        <Widget title={'Groups'} items={groups}/>
        <Widget title={'Friends'} items={friends}/>
      </div>
    </aside>
  );
};
