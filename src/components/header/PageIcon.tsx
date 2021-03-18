import React from 'react';

import './PageIcon.css';

interface Props {
  title: string,
  icon: any
}

const PageIcon: React.FC<Props> = ({ icon, title }) => {
  return <div className="page-icon" title={title}>{icon}</div>;
};

export default PageIcon;
