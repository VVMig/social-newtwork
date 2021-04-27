import { Post } from '../packages/components';

export const posts: Post[] = [
  {
    title: 'My first post',
    subtitle: 'Today',
    date: Date.now(),
    text: 'asd asdasd asd asd asdasdasd asdasd asdasd asdasd asd das ',
    author: {
      firstName: 'Vladimir',
      lastName: 'Migay',
      status: 'single',
    },
    likes: 15,
    src:
      'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
  },
];
