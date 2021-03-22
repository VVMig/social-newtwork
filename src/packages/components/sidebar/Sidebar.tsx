import React from 'react';
import { Search } from './Search';
import { Logo } from './Logo';
import { Widget } from '../sidebar-widget/Widget';
import './Sidebar.css';
import { WidgetFields } from '../sidebar-widget/interfaces';
import styled from 'styled-components';

interface Props {
  friends: WidgetFields[];
  groups: WidgetFields[];
}

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  width: 320px;
  height: 100vh;
  background-color: #f6f9fb;
  z-index: 1;
  padding: 20px 0 0 0;
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px 0 28px;
`;

const SidebarContent = styled.div``;

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
