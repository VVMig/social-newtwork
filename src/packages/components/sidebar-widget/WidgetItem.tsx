import React from 'react';
import { Link } from 'react-router-dom';
import { WidgetFields } from './interfaces';
import { Styled } from './styled';
import { Underline } from '../underline/Underline';

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
      <Styled.Item className="underline-container">
        <Styled.Info>
          <Styled.Img />
          <Styled.Name>
            <h3>{communityName || `${firstName} ${lastName}`}</h3>
          </Styled.Name>
        </Styled.Info>
        {online !== undefined && (
          <Styled.Status>
            {online ? (
              <Styled.Online color="#00f8ea" fontSize={24}>
                &bull;
              </Styled.Online>
            ) : (
              <Styled.Online color="#91929d" fontSize={12}>
                {lastVisit} min
              </Styled.Online>
            )}
          </Styled.Status>
        )}
        <Underline />
      </Styled.Item>
    </Link>
  );
};
