import React from 'react';
import { Widget } from '../../packages/components/sidebar-widget/Widget';
import { SidebarItems } from './interfaces';
import { Content as SidebarContent } from '../../packages/components/sidebar/Content';

export const Content = ({ friends, groups }: SidebarItems) => {
  return (
    <SidebarContent>
      <Widget title="groups" items={groups} />
      <Widget title="friends" items={friends} />
    </SidebarContent>
  );
};
