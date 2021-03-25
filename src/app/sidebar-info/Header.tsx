import { Header as SidebarHeader } from '../../packages/components/sidebar/Header';
import { Logo } from '../../packages/components/sidebar/Logo';
import { Search } from '../../packages/components/sidebar/Search';

export const Header = () => {
  return (
    <SidebarHeader>
      <Logo />
      <Search />
    </SidebarHeader>
  );
};
