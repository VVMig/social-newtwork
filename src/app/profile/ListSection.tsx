import React from 'react';

import { Styled } from './styled';

interface Props {
  allClickHandler: React.MouseEventHandler;
}

export const ListSection: React.FC<Props> = ({ allClickHandler, children }) => {
  return (
    <Styled.ListSectionWrapper>
      <Styled.Items>
        <Styled.AllItems>
          <Styled.AllItemsButton onClick={allClickHandler}>
            View all
          </Styled.AllItemsButton>
        </Styled.AllItems>
        {children}
      </Styled.Items>
    </Styled.ListSectionWrapper>
  );
};
