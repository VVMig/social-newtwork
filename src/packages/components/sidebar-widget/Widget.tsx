import React from 'react';
import { WidgetItem } from './WidgetItem';
import { WidgetProps } from './interfaces';
import { List, SidebarWidget, Title } from './Styled';

export const Widget = ({ title, items }: WidgetProps) => {
  return (
    <SidebarWidget>
      <Title>
        <h2>{title}</h2>
      </Title>
      <List>
        {items.map((x, i) => (
          <WidgetItem {...x} key={i} />
        ))}
      </List>
    </SidebarWidget>
  );
};
