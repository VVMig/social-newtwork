import React, { useEffect, useState } from 'react';
import { Search } from './Search';
import { Logo } from './Logo';
import { YourGroups } from './groups/YourGroups';
import { FriendsList } from './friends/FriendsList';
import { GroupView } from './Interfaces';
import { FriendFields } from './friends/Interfaces';
import './Sidebar.css';

export const Sidebar: React.FC = () => {
  const [groups, setGroups] = useState<GroupView[]>([]);
  const [friends, setFriends] = useState<FriendFields[]>([]);

  useEffect(() => {
    setGroups([
      {
        title: 'Figma Community',
        imageSrc:
          'https://media-exp1.licdn.com/dms/image/C560BAQGvV_5x3UBMJA/company-logo_200_200/0/1571158216754?e=2159024400&v=beta&t=FNtl7xIQWKxcVVqON99w2TgHZ1coVC3kevZEHi0z6lI',
        link: '#',
      },
      {
        title: 'Sketch Comunnity',
        imageSrc:
          'https://media-exp1.licdn.com/dms/image/C560BAQGvV_5x3UBMJA/company-logo_200_200/0/1571158216754?e=2159024400&v=beta&t=FNtl7xIQWKxcVVqON99w2TgHZ1coVC3kevZEHi0z6lI',
        link: '#',
      },
      {
        title: 'Sketch Comunnity',
        imageSrc:
          'https://media-exp1.licdn.com/dms/image/C560BAQGvV_5x3UBMJA/company-logo_200_200/0/1571158216754?e=2159024400&v=beta&t=FNtl7xIQWKxcVVqON99w2TgHZ1coVC3kevZEHi0z6lI',
        link: '#',
      },
      {
        title: 'Sketch Comunnity',
        imageSrc:
          'https://media-exp1.licdn.com/dms/image/C560BAQGvV_5x3UBMJA/company-logo_200_200/0/1571158216754?e=2159024400&v=beta&t=FNtl7xIQWKxcVVqON99w2TgHZ1coVC3kevZEHi0z6lI',
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
        imageSrc:
          'https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-superJumbo.jpg',
      },
      {
        firstName: 'Eleanor',
        lastName: 'Pena',
        lastVisit: 0,
        online: true,
        link: '#',
        imageSrc:
          'https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-superJumbo.jpg',
      },
      {
        firstName: 'Eleanor',
        lastName: 'Pena',
        lastVisit: 11,
        online: false,
        link: '#',
        imageSrc:
          'https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-superJumbo.jpg',
      },
      {
        firstName: 'Eleanor',
        lastName: 'Pena',
        lastVisit: 0,
        online: true,
        link: '#',
        imageSrc:
          'https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-superJumbo.jpg',
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
