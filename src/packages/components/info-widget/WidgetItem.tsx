import React from 'react';

import { Link } from 'react-router-dom';

import { Underline } from '../underline/Underline';
import { Info } from './Info';
import { FriendFields } from './interfaces';
import { Status } from './Status';
import { Styled } from './styled';

export const WidgetItem = ({
  firstName,
  lastVisit,
  lastName,
  online,
  route,
  avatar = '',
}: FriendFields) => {
  return (
    <Link to={route}>
      <Styled.Item>
        <Info src={avatar} name={`${firstName} ${lastName}`} />
        <Status online={online} lastVisit={lastVisit} />
        <Underline parentClass={Styled.Item.styledComponentId} />
      </Styled.Item>
    </Link>
  );
};
