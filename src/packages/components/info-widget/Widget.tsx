import React from 'react';

import { Spinner } from '../spinner';
import { WidgetProps } from './interfaces';
import { Styled } from './styled';
import { WidgetItem } from './WidgetItem';

export const Widget = ({ title, items, altTitle, isLoading }: WidgetProps) => {
  return (
    <Styled.SidebarWidget>
      <Styled.Title>
        <h2>{title}</h2>
      </Styled.Title>
      <Styled.List>
        {isLoading ? (
          <Styled.SpinnerContainer>
            <Spinner />
          </Styled.SpinnerContainer>
        ) : (
          <>
            {!items.length && (
              <Styled.Empty>{altTitle || 'Nothing'}</Styled.Empty>
            )}
            {items.map((item, i) => (
              <WidgetItem {...item} key={i} />
            ))}
          </>
        )}
      </Styled.List>
    </Styled.SidebarWidget>
  );
};
