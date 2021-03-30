import React from 'react';
import { Widget } from '../../packages/components';
import { SidebarItems } from './interfaces';

export const Content = ({ friends, groups }: SidebarItems) => {
  return (
    <div>
      <Widget title="groups" items={groups} />
      <Widget title="friends" items={friends} />
    </div>
  );
};
