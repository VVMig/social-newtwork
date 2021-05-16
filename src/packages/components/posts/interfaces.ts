import { ImageProps } from '../imageWrapper';

export interface Post extends ImageProps {
  title: string;
  subtitle: string;
  date: number;
  text: string;
  author: string;
  likes: number;
  link: string;
}

export interface PostsListProps {
  posts: Post[];
}

export interface HeaderProps {
  title: string;
  subtitle: string;
  date: number;
}

export interface SpanProps {
  day?: boolean;
}

export interface BodyProps {
  text: string;
  author: string;
}

export interface FooterProps {
  likes: number;
}
