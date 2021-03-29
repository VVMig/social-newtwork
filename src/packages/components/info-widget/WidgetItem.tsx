import React from 'react';
import { Link } from 'react-router-dom';
import { WidgetFields } from './interfaces';
import { Styled } from './styled';
import { Underline } from '../underline/Underline';
import { Dot } from '../dot/Dot';

export const WidgetItem = (props: WidgetFields) => {
  const {
    firstName,
    lastVisit,
    lastName,
    online,
    route,
    communityName,
  } = props;

  return (
    <Link to={route}>
      <Styled.Item>
        <Styled.Info>
          <Styled.Img />
          <Styled.Name>
            <h3>{communityName || `${firstName} ${lastName}`}</h3>
          </Styled.Name>
        </Styled.Info>
        {online !== undefined && (
          <Styled.Status>
            {online ? (
              <Styled.Online>
                <Dot />
              </Styled.Online>
            ) : (
              <Styled.Offline>{lastVisit} min</Styled.Offline>
            )}
          </Styled.Status>
        )}
        <Underline parentClass={Styled.Item.styledComponentId} />
      </Styled.Item>
    </Link>
  );
};
