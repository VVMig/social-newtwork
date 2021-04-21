import { FriendFields } from '../../packages/components';

export interface SidebarItems {
  friends: FriendFields[];
}

export interface SidebarTogglerProps {
  showSidebar: boolean;
}
