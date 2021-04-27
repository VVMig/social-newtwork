import React from 'react';

export interface Item {
  title: string;
  link?: string;
  actionHandler?: React.MouseEventHandler;
  icon?: JSX.Element;
}

export interface MenuProps {
  className?: string;
  items: Item[];
  show: boolean;
  showDelay?: number;
}
