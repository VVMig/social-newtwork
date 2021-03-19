import React from 'react';
import { Link } from 'react-router-dom';
import { GroupView } from './interfaces';
import './Group.css';

export const Group = ({ title, src, link }: GroupView) => {
  return (
    <Link to={link}>
      <div className="group-item">
        <div className="group-image">
          <img src={src} alt={title} />
        </div>
        <div className="group-title">
          <h3>{title}</h3>
        </div>
      </div>
    </Link>
  );
};
