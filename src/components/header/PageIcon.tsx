import React from 'react';

import './PageIcon.css';

interface Props {
  icon: JSX.Element;
}

export const PageIcon = ({ icon }: Props) => {
  return <div className="page-icon">{icon}</div>;
};
