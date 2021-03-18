import React from 'react';
import { Icon } from '../Icon';
import { IconType } from '../IconEnum';
import { PageIcon } from './PageIcon';
import { Link } from 'react-router-dom';

import './Navbar.css';

interface IconPage {
  iconComponent: JSX.Element;
  title: string;
  link: string;
}

const icons: IconPage[] = [
  {
    iconComponent: <Icon title={IconType.Home} />,
    title: IconType.Home,
    link: '#',
  },
  {
    iconComponent: <Icon title={IconType.Groups} />,
    title: IconType.Groups,
    link: '#',
  },
  {
    iconComponent: <Icon title={IconType.Messager} />,
    title: IconType.Messager,
    link: '#',
  },
  {
    iconComponent: <Icon title={IconType.Help} />,
    title: IconType.Help,
    link: '#',
  },
  {
    iconComponent: <Icon title={IconType.Settings} />,
    title: IconType.Settings,
    link: '#',
  },
];

export const Navbar = () => {
  return (
    <div className="pages-container">
      {icons.map((x, i) => (
        <Link to={x.link} key={i} className="page-link">
          <PageIcon icon={x.iconComponent} title={x.title} />
        </Link>
      ))}
    </div>
  );
};
