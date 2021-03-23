import React from 'react';
import { Link } from 'react-router-dom';
import { WidgetFields } from './interfaces';
import { Img, Info, Item, Name, Online, Status } from './Styled';

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
      <Item>
        <Info>
          <Img />
          <Name className="widget-name">
            <h3>{communityName || `${firstName} ${lastName}`}</h3>
          </Name>
        </Info>
        {online !== undefined && (
          <Status className="widget-status">
            {online ? (
              <Online color="#00f8ea" fontSize={24}>
                &bull;
              </Online>
            ) : (
              <Online color="#91929d" fontSize={12}>
                {lastVisit} min
              </Online>
            )}
          </Status>
        )}
      </Item>
    </Link>
  );
};
