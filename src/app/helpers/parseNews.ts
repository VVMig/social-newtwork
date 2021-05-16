import { Post } from '../../packages/components';

export interface NewsFields {
  author: string;
  category: string;
  country: string;
  description: string;
  image: string | null;
  published_at: string;
  title: string;
  url: string;
}

export const parseNews = (news: NewsFields[]): Post[] =>
  news.map((post) => ({
    title: post.title,
    subtitle: post.category,
    date: +new Date(post.published_at),
    text: post.description,
    author: post.author,
    likes: 0,
    src: post.image || '',
    link: post.url,
  }));
