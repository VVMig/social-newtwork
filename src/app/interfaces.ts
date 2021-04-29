export interface Like {
  owner: string;
  _id: string;
}

export interface Image {
  _id: string;
  name: string;
}

export interface Photo extends Image {
  owner?: string;
  date?: number;
  likes?: Like;
}

export interface Following {
  firstName: string;
  lastName: string;
  online: boolean;
  _id: string;
  lastVisit: number;
  avatar: Image;
}

export interface Follower {
  firstName: string;
  _id: string;
  avatar: Photo;
  online: boolean;
}

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  verified: string;
  _id: string;
  following: Following[];
  avatar: Image;
}
