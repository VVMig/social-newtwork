import React from 'react';
import { Search } from './Search';
import { Logo } from './Logo';
import { Widget } from '../sidebar-widget/Widget';
import { WidgetFields } from '../sidebar-widget/interfaces';
import { Aside, SidebarContent, SidebarHeader } from './Styled';

interface Props {
  friends: WidgetFields[];
  groups: WidgetFields[];
}

export const Sidebar = ({ friends, groups }: Props) => {
  return (
    <Aside>
      <SidebarHeader>
        <Logo />
        <Search />
      </SidebarHeader>
      <SidebarContent>
        <Widget title={'Groups'} items={groups} />
        <Widget title={'Friends'} items={friends} />
      </SidebarContent>
    </Aside>
  );
};
