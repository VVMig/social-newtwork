export interface FriendFields {
  firstName: string;
  lastName: string;
  online: boolean;
  imageSrc: string;
  link: string;
  lastVisit: number;
}

export interface FriendsListProps {
  friends: FriendFields[];
}
