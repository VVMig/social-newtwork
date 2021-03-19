import React from 'react';
import { Group } from './Group';
import { GroupView } from './interfaces';
import group from './../../icons/group.jpeg';
import './YourGroups.css';

const groups: GroupView[] = [
  {
    title: 'Sketch Comunnity',
    src: group,
    link: '#',
  },
  {
    title: 'Sketch Comunnity',
    src: group,
    link: '#',
  },
  {
    title: 'Sketch Comunnity',
    src: group,
    link: '#',
  },
  {
    title: 'Sketch Comunnity',
    src: group,
    link: '#',
  },
];

export const YourGroups = () => {
  return (
    <div className="sidebar-groups">
      <div className="groups-title">
        <h2>Your groups</h2>
      </div>
      <div className="groups-list">
        {groups.map((x, i) => (
          <Group {...x} key={i} />
        ))}
      </div>
    </div>
  );
};
