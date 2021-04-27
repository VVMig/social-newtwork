import React from 'react';
import { WidgetItem } from './WidgetItem';
import { WidgetProps } from './interfaces';
import { Styled } from './styled';

export const Widget = ({ title, items }: WidgetProps) => {
  return (
    <Styled.SidebarWidget>
      <Styled.Title>
        <h2>{title}</h2>
      </Styled.Title>
      <Styled.List>
        {items.map((item, i) => (
          <WidgetItem {...item} key={i} />
        ))}
      </Styled.List>
    </Styled.SidebarWidget>
  );
};
