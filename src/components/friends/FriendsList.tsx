import React from 'react';
import { Friend } from './Friend';
import { FriendFields } from './interfaces';
import friend from './../../icons/friend.jpg';
import './FriendsList.css';

const friends: FriendFields[] = [
  {
    firstName: 'Eleanor',
    lastName: 'Pena',
    lastVisit: 0,
    online: true,
    link: '#',
    src: friend,
  },
  {
    firstName: 'Eleanor',
    lastName: 'Pena',
    lastVisit: 0,
    online: true,
    link: '#',
    src: friend,
  },
  {
    firstName: 'Eleanor',
    lastName: 'Pena',
    lastVisit: 11,
    online: false,
    link: '#',
    src: friend,
  },
  {
    firstName: 'Eleanor',
    lastName: 'Pena',
    lastVisit: 0,
    online: true,
    link: '#',
    src: friend,
  },
];

export const FriendsList = () => {
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
