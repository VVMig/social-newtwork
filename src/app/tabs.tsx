import { Icon } from './Icon';
import { Tab } from '../packages/components';
import { IconType } from './IconEnum';
import { RoutesEnum } from './routes/RoutesEnum';

export const tabs: Tab[] = [
  {
    route: RoutesEnum.Home,
    title: 'Home page',
    component: (): JSX.Element => <Icon type={IconType.Home} />,
  },
  {
    route: RoutesEnum.Groups,
    title: 'Groups',
    component: () => <Icon type={IconType.Groups} />,
  },
  {
    route: RoutesEnum.Messager,
    title: 'Messager',
    component: () => <Icon type={IconType.Messager} />,
  },
  {
    route: RoutesEnum.Help,
    title: 'Help',
    component: () => <Icon type={IconType.Help} />,
  },
  {
    route: RoutesEnum.Settings,
    title: 'Settings',
    component: () => <Icon type={IconType.Settings} />,
  },
];
