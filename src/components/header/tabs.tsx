import { IconType, TabRoutes } from '../IconEnum';
import { Icon } from '../Icon';

export interface Tab {
  component: (title: string) => JSX.Element;
  title: string;
  route: TabRoutes;
}

export const tabs: Tab[] = [
  {
    route: TabRoutes.Home,
    title: 'Home page',
    component: (title: string): JSX.Element => (
      <Icon type={IconType.Home} title={title} />
    ),
  },
  {
    route: TabRoutes.Groups,
    title: 'Groups',
    component: (title: string) => <Icon type={IconType.Groups} title={title} />,
  },
  {
    route: TabRoutes.Messager,
    title: 'Messager',
    component: (title: string) => (
      <Icon type={IconType.Messager} title={title} />
    ),
  },
  {
    route: TabRoutes.Help,
    title: 'Help',
    component: (title: string) => <Icon type={IconType.Help} title={title} />,
  },
  {
    route: TabRoutes.Settings,
    title: 'Settings',
    component: (title: string) => (
      <Icon type={IconType.Settings} title={title} />
    ),
  },
];
