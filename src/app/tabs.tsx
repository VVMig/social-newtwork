import { Icon } from './Icon';
import { Tab } from '../packages/components';
import { TabRoutes, IconType } from './IconEnum';

export const tabs: Tab[] = [
  {
    route: TabRoutes.Home,
    title: 'Home page',
    component: (): JSX.Element => <Icon type={IconType.Home} />,
  },
  {
    route: TabRoutes.Groups,
    title: 'Groups',
    component: () => <Icon type={IconType.Groups} />,
  },
  {
    route: TabRoutes.Messager,
    title: 'Messager',
    component: () => <Icon type={IconType.Messager} />,
  },
  {
    route: TabRoutes.Help,
    title: 'Help',
    component: () => <Icon type={IconType.Help} />,
  },
  {
    route: TabRoutes.Settings,
    title: 'Settings',
    component: () => <Icon type={IconType.Settings} />,
  },
];
