interface Author {
  firstName: string;
  lastName: string;
}

export interface Post {
  title: string;
  subtitle: string;
  date: number;
  text: string;
  author: Author;
  likes: number;
}

export interface PostsListProps {
  posts: Post[];
}

export interface HeaderProps {
  title: string;
  subtitle: string;
  date: number;
}

export interface ImgProps {
  imgSrc?: string;
}

export interface SpanProps {
  color?: string;
  fontSize?: string;
  weight?: string;
}

export interface AvatarProps {
  imgSrc?: string;
}

export interface BodyProps {
  text: string;
  firstName: string;
  lastName: string;
  subname?: string;
}

export interface FooterProps {
  likes: number;
}
