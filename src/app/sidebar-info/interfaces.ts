import { FriendFields } from '../profile/interfaces';

export interface SidebarItems {
  friends: FriendFields[];
}

export interface SidebarTogglerProps {
  showSidebar: boolean;
}
