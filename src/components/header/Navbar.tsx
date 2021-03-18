import React from 'react';
import {
  HomeRounded,
  PeopleAltRounded,
  ForumRounded,
  FlagRounded,
  SettingsRounded,
} from '@material-ui/icons';

import PageIcon from './PageIcon';
import { Link } from 'react-router-dom';

import './Navbar.css';

interface Icon {
  title: string;
  iconComponent: any;
}

const icons: Icon[] = [
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

const Navbar: React.FC = () => {
  return (
    <div className="pages-container">
      {icons.map((e, i) => (
          <Link to="#" className="page-link">
              <PageIcon icon={e.iconComponent} title={e.title} key={i}/>
          </Link>
      ))}
    </div>
  );
};

export default Navbar;
