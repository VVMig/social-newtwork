export interface FriendFields {
  firstName: string;
  lastName: string;
  online: boolean;
  src: string;
  link: string;
  lastVisit: number;
}

export interface FriendsListProps {
  friends: FriendFields[];
}
