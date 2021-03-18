import React from 'react';

import './PageIcon.css';

interface Props {
  icon: any;
}

const PageIcon: React.FC<Props> = ({ icon }) => {
  return <div className="page-icon">{icon}</div>;
};

export default PageIcon;
