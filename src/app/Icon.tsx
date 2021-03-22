import React from 'react';
import { IconType } from './IconEnum';
import { icons } from './icons';

interface IconProps {
  type: IconType;
  title?: string;
}

export const Icon = ({ type, title }: IconProps) => {
  const Icon = () => icons[IconType[type]];

  return (
    <div title={title}>
      <Icon></Icon>
    </div>
  );
};
