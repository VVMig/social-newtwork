export interface ImageProps {
  src: string;
  className?: string;
  actionHandler?: React.MouseEventHandler<Element>;
  isModal?: boolean;
  likesNumber?: number;
  alt?: string;
  likeIcon?: JSX.Element;
  isLiked?: boolean;
}
