export interface FriendFields {
  route: string;
  firstName: string;
  lastName: string;
  online: boolean;
  lastVisit: number;
  avatar?: string;
}

export interface WidgetProps {
  title: string;
  items: FriendFields[];
}
