import React from 'react';
import {
  HomeRounded,
  PeopleAltRounded,
  ForumRounded,
  FlagRounded,
  SettingsRounded,
} from '@material-ui/icons';

import { PageIcon } from './PageIcon';
import { Link } from 'react-router-dom';

import './Navbar.css';

interface Icon {
  title: string;
  iconComponent: JSX.Element;
}

export const icons: Icon[] = [
  {
    title: 'Home',
    iconComponent: <HomeRounded />,
  },
  {
    title: 'Groups',
    iconComponent: <PeopleAltRounded />,
  },
  {
    title: 'Messager',
    iconComponent: <ForumRounded />,
  },
  {
    title: 'Help',
    iconComponent: <FlagRounded />,
  },
  {
    title: 'Settings',
    iconComponent: <SettingsRounded />,
  },
];

export const Navbar: React.FC = () => {
  return (
    <div className="pages-container">
      {icons.map((x, i) => (
        <Link to="#" className="page-link" key={i}>
          <PageIcon icon={x.iconComponent} title={x.title} />
        </Link>
      ))}
    </div>
  );
};
