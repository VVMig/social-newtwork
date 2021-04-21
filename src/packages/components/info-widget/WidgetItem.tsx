import React from 'react';
import { Link } from 'react-router-dom';
import { FriendFields } from './interfaces';
import { Styled } from './styled';
import { Underline } from '../underline/Underline';
import { Dot } from '../dot/Dot';
import { Avatar } from '../avatar/Avatar';

export const WidgetItem = ({
  firstName,
  lastVisit,
  lastName,
  online,
  route,
  avatar,
}: FriendFields) => {
  return (
    <Link to={route}>
      <Styled.Item>
        <Styled.Info>
          <Avatar size={30} src={avatar} />
          <Styled.Name>
            <h3>{`${firstName} ${lastName}`}</h3>
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
