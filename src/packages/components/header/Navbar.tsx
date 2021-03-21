import React from 'react';
import { PageIcon } from './PageIcon';
import { Link } from 'react-router-dom';
import { TabProps } from './interfaces'
import './Navbar.css';

export const Navbar = ({ tabs }: TabProps) => {
  return (
    <div className="pages-container">
      {tabs.map((x, i) => (
        <Link to={x.route} key={i} title={x.title} className="page-link">
          <PageIcon>{x.component(x.title)}</PageIcon>
        </Link>
      ))}
    </div>
  );
};
