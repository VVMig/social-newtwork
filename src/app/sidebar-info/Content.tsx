import React from 'react';
import { Widget } from '../../packages/components';
import { SidebarItems } from './interfaces';
import { SidebarContent } from '../../packages/components';

export const Content = ({ friends, groups }: SidebarItems) => {
  return (
    <SidebarContent>
      <Widget title="groups" items={groups} />
      <Widget title="friends" items={friends} />
    </SidebarContent>
  );
};
