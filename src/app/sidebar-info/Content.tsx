import React from 'react';
import { Widget, SidebarContent } from '../../packages/components';
import { SidebarItems } from './interfaces';

export const Content = ({ friends, groups }: SidebarItems) => {
  return (
    <SidebarContent>
      <Widget title="groups" items={groups} />
      <Widget title="friends" items={friends} />
    </SidebarContent>
  );
};
