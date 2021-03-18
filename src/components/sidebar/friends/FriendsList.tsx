import React from 'react';
import { Friend } from './Friend';
import { FriendsListProps } from './Interfaces';
import './FriendsList.css';

export const FriendsList = (props: FriendsListProps) => {
  const { friends } = props;

  return (
    <div className="sidebar-groups">
      <div className="friends-title">
        <h2>Friends</h2>
      </div>
      <div className="friends-list">
        {friends.map((x, i) => (
          <Friend {...x} key={i} />
        ))}
      </div>
    </div>
  );
};
