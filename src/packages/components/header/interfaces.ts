import { IconType, TabRoutes } from '../IconEnum';
import { Icon } from '../Icon';

export interface Tab {
  component: (title: string) => JSX.Element;
  title: string;
  route: TabRoutes;
}

export interface TabProps {
  tabs: Tab[];
  tabRoutes?: string;
}
