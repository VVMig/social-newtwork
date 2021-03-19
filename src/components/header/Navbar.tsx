import React from 'react';
import { Icon } from '../Icon';
import { IconType, TabRoutes } from '../IconEnum';
import { PageIcon } from './PageIcon';
import { Link } from 'react-router-dom';

import './Navbar.css';

interface IconPage {
  component: (arg0?: string) => JSX.Element;
  title: string;
  route: TabRoutes;
}

const tabs: IconPage[] = [
  {
    route: TabRoutes.Home,
    title: 'Home page',
    component: (title?: string): JSX.Element => (
      <Icon type={IconType.Home} title={title} />
    ),
  },
  {
    route: TabRoutes.Groups,
    title: 'Groups',
    component: (title?: string) => (
      <Icon type={IconType.Groups} title={title} />
    ),
  },
  {
    route: TabRoutes.Messager,
    title: 'Messager',
    component: (title?: string) => (
      <Icon type={IconType.Messager} title={title} />
    ),
  },
  {
    route: TabRoutes.Help,
    title: 'Help',
    component: (title?: string) => <Icon type={IconType.Help} title={title} />,
  },
  {
    route: TabRoutes.Settings,
    title: 'Settings',
    component: (title?: string) => (
      <Icon type={IconType.Settings} title={title} />
    ),
  },
];

export const Navbar = () => {
  return (
    <div className="pages-container">
      {tabs.map((x, i) => (
        <Link to={x.route} key={i} title={x.title} className="page-link">
          <PageIcon icon={x.component(x.title)} />
        </Link>
      ))}
    </div>
  );
};
