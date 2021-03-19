import React, { useEffect, useState } from 'react';
import { Search } from './Search';
import { Logo } from './Logo';
import { YourGroups } from '../groups/YourGroups';
import { FriendsList } from '../friends/FriendsList';
import { GroupView } from '../groups/interfaces';
import { FriendFields } from '../friends/interfaces';
import friend from './../../icons/friend.jpg';
import group from './../../icons/group.jpeg';
import './Sidebar.css';

export const Sidebar = () => {
  const [groups, setGroups] = useState<GroupView[]>([]);
  const [friends, setFriends] = useState<FriendFields[]>([]);

  useEffect(() => {
    setGroups([
      {
        title: 'Sketch Comunnity',
        src: group,
        link: '#',
      },
      {
        title: 'Sketch Comunnity',
        src: group,
        link: '#',
      },
      {
        title: 'Sketch Comunnity',
        src: group,
        link: '#',
      },
      {
        title: 'Sketch Comunnity',
        src: group,
        link: '#',
      },
    ]);

    setFriends([
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
    ]);
  }, []);

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <Logo />
        <Search />
      </div>
      <div className="sidebar-content">
        <YourGroups groups={groups} />
        <FriendsList friends={friends} />
      </div>
    </aside>
  );
};
