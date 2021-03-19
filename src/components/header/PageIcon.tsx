import React from 'react';
import './PageIcon.css';

interface Props {
  children: JSX.Element;
}

export const PageIcon: React.FC<Props> = ({ children }) => {
  return <div className="page-icon">{children}</div>;
};
