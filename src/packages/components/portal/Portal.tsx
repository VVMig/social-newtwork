import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

export const Portal: React.FC = ({ children }) => {
  return root && ReactDOM.createPortal(<>{children}</>, root);
};
