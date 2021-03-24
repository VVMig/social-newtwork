import React from 'react';
import { Search } from './Search';
import { Logo } from './Logo';
import { Widget } from '../sidebar-widget/Widget';
import { WidgetFields } from '../sidebar-widget/interfaces';
import { Styled } from './styled';

interface Props {
  friends: WidgetFields[];
  groups: WidgetFields[];
}

export const Sidebar = ({ friends, groups }: Props) => {
  return (
    <Styled.Aside>
      <Styled.SidebarHeader>
        <Logo />
        <Search />
      </Styled.SidebarHeader>
      <Styled.SidebarContent>
        <Widget title={'Groups'} items={groups} />
        <Widget title={'Friends'} items={friends} />
      </Styled.SidebarContent>
    </Styled.Aside>
  );
};
