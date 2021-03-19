import React from 'react';
import { Group } from './Group';
import { GroupView } from './interfaces';
import './YourGroups.css';

interface Props {
  groups: GroupView[];
}

export const YourGroups = ({ groups }: Props) => {
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
