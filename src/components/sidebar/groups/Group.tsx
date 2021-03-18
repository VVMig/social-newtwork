import React from 'react';
import { Link } from 'react-router-dom';
import { GroupProps } from './Interfaces';
import './Group.css';

export const Group = ({ title, imageSrc, link }: GroupProps) => {
  return (
    <Link to={link}>
      <div className="group-item">
        <div
          className="group-image"
          style={{ backgroundImage: `url(${imageSrc})` }}
        ></div>
        <div className="group-title">
          <h3>{title}</h3>
        </div>
      </div>
    </Link>
  );
};
