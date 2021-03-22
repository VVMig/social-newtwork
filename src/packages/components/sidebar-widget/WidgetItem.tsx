import React from 'react';
import { Link } from 'react-router-dom';
import { WidgetItemFields } from './interfaces';
import './WidgetItem.css';

export const WidgetItem = (props: WidgetItemFields) => {
  const {
    firstName,
    lastVisit,
    lastName,
    online,
    route,
    communityName,
  } = props;

  return (
    <Link to={route}>
      <div className="widget-item">
        <div className="widget-info">
          <div className="widget-img"></div>
          <div className="widget-name">
            <h3>
              {communityName ? communityName : `${firstName} ${lastName}`}
            </h3>
          </div>
        </div>
        {online !== undefined && (
          <div className="widget-status">
            {online ? (
              <span className="widget-online">&bull;</span>
            ) : (
              <span className="widget-offline">{lastVisit} min</span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
};
