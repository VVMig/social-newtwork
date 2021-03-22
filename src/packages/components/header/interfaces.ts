// import { IconType, TabRoutes } from '../../../app/IconEnum';

export interface Tab {
  component: (title: string) => JSX.Element;
  title: string;
  route: string;
}

export interface TabProps {
  tabs: Tab[];
}
