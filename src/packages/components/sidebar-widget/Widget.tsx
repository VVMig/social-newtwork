import React from 'react';
import { WidgetItem } from './WidgetItem';
import { WidgetProps } from './interfaces';
import './Widget.css';

export const Widget = ({ title, items }: WidgetProps) => {
  return (
    <div className="sidebar-widget">
      <div className="widget-title">
        <h2>{title}</h2>
      </div>
      <div className="widget-list">
        {items.map((x, i) => (
            <WidgetItem {...x} key={i} />
        ))}
      </div>
    </div>
  );
};
