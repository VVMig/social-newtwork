import React from 'react';
import { Link } from 'react-router-dom';
import { FriendFields } from './interfaces';
import { Styled } from './styled';
import { Underline } from '../underline/Underline';
import { Dot } from '../dot/Dot';
import { Avatar } from '../avatar/Avatar';
import moment from 'moment';

export const WidgetItem = ({
  firstName,
  lastVisit,
  lastName,
  online,
  route,
  avatar,
}: FriendFields) => {
  const realTime = () => {
    return moment(lastVisit).fromNow() === 'a few seconds ago'
      ? 'recently'
      : moment(lastVisit).fromNow();
  };

  return (
    <Link to={route}>
      <Styled.Item>
        <Styled.Info>
          <Avatar size={30} src={avatar} name={!avatar ? firstName : ''} />
          <Styled.Name>
            <h3>{`${firstName} ${lastName}`}</h3>
          </Styled.Name>
        </Styled.Info>
        <Styled.Status>
          {online ? (
            <Styled.Online>
              <Dot />
            </Styled.Online>
          ) : (
            <Styled.Offline>{realTime()}</Styled.Offline>
          )}
        </Styled.Status>
        <Underline parentClass={Styled.Item.styledComponentId} />
      </Styled.Item>
    </Link>
  );
};
