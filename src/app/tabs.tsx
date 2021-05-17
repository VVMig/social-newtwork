import { Tab } from '../packages/components';
import { CountIcon } from './CountIcon';
import { Icon } from './Icon';
import { IconType } from './IconEnum';
import { RoutesEnum } from './routes/RoutesEnum';

export const tabs: Tab[] = [
  {
    route: RoutesEnum.Home,
    title: 'Home page',
    component: () => <Icon type={IconType.Home} />,
  },
  {
    route: RoutesEnum.Messager,
    title: 'Messager',
    component: () => <CountIcon type={IconType.Messager} />,
  },
  {
    route: RoutesEnum.Help,
    title: 'Help',
    component: () => <Icon type={IconType.Help} />,
  },
];
