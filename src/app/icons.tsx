import React from 'react';

import {
  ArrowBackIos,
  ArrowDropDown,
  CancelOutlined,
  CheckCircleOutline,
  CloudUploadOutlined,
  Delete,
  EmailOutlined,
  ExitToApp,
  Favorite,
  FlagRounded,
  ForumRounded,
  HomeRounded,
  LockOutlined,
  NotificationsNone,
  PeopleAltRounded,
  PersonOutline,
  Send,
  SettingsRounded,
  VisibilityOutlined,
} from '@material-ui/icons';

import { IconType } from './IconEnum';

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
  [IconType.Email]: <EmailOutlined />,
  [IconType.Lock]: <LockOutlined />,
  [IconType.User]: <PersonOutline />,
  [IconType.Exit]: <ExitToApp />,
  [IconType.Like]: <Favorite />,
  [IconType.CloseArrow]: <ArrowBackIos />,
  [IconType.Upload]: <CloudUploadOutlined />,
  [IconType.Done]: <CheckCircleOutline />,
  [IconType.Error]: <CancelOutlined />,
  [IconType.Trash]: <Delete />,
};
