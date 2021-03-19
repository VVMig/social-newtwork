import React from 'react';
import { IconType } from './IconEnum';
import {
  HomeRounded,
  PeopleAltRounded,
  ForumRounded,
  FlagRounded,
  SettingsRounded,
} from '@material-ui/icons';

interface IconProps {
  type: IconType;
  title?: string;
}

const icons: Record<IconType, JSX.Element> = {
  [IconType.Groups]: <PeopleAltRounded />,
  [IconType.Home]: <HomeRounded />,
  [IconType.Help]: <FlagRounded />,
  [IconType.Messager]: <ForumRounded />,
  [IconType.Settings]: <SettingsRounded />,
};

export const Icon = ({ type, title }: IconProps) => {
  const Icon = () => icons[IconType[type]];

  return (
    <div title={title}>
      <Icon></Icon>
    </div>
  );
};
