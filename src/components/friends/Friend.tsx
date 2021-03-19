import React from 'react';
import { Link } from 'react-router-dom';
import { FriendFields } from './interfaces';
import './Friend.css';

export const Friend = (props: FriendFields) => {
  const { firstName, lastVisit, lastName, online, src, link } = props;

  return (
    <Link to={link}>
      <div className="friend-item">
        <div className="friend-info">
          <div className="friend-avatar">
            <img src={src} alt={`${firstName} ${lastName}`} />
          </div>
          <div className="friend-name">
            <h3>
              {firstName} {lastName}
            </h3>
          </div>
        </div>
        <div className="friend-status">
          {online ? (
            <span className="friend-online">&bull;</span>
          ) : (
            <span className="friend-offline">{lastVisit} min</span>
          )}
        </div>
      </div>
    </Link>
  );
};
