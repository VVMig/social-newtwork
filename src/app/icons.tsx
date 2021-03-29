import React from 'react';
import { IconType } from './IconEnum';
import {
  HomeRounded,
  PeopleAltRounded,
  ForumRounded,
  FlagRounded,
  SettingsRounded,
  NotificationsNone,
  ArrowDropDown,
  VisibilityOutlined,
  Send,
} from '@material-ui/icons';

export const icons: Record<IconType, JSX.Element> = {
  [IconType.Groups]: <PeopleAltRounded />,
  [IconType.Home]: <HomeRounded />,
  [IconType.Help]: <FlagRounded />,
  [IconType.Messager]: <ForumRounded />,
  [IconType.Settings]: <SettingsRounded />,
  [IconType.Notifications]: <NotificationsNone />,
  [IconType.Arrow]: <ArrowDropDown />,
  [IconType.Views]: <VisibilityOutlined />,
  [IconType.Send]: <Send />,
};
