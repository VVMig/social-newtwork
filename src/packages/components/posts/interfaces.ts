import { DefaultImageProps } from '../imageWrapper';

export interface Post extends DefaultImageProps {
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
  isLoading?: boolean;
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
}

export interface FooterProps {
  likes: number;
  author: string;
}
