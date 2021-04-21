import React from 'react';
import { Widget } from '../../packages/components';
import { SidebarItems } from './interfaces';

export const Content = ({ friends }: SidebarItems) => {
  return (
    <>
      <Widget title="friends" items={friends} />
    </>
  );
};
