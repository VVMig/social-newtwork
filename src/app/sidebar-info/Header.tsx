import { SidebarHeader } from '../../packages/components';
import { Logo } from '../../packages/components';
import { Search } from '../../packages/components';

export const Header = () => {
  return (
    <SidebarHeader>
      <Logo />
      <Search />
    </SidebarHeader>
  );
};
