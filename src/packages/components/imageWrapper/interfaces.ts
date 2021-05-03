import React from 'react';

export interface ImageProps {
  src: string;
  className?: string;
  actionHandler?: React.MouseEventHandler<Element>;
  isModal?: boolean;
  likesNumber?: number;
  alt?: string;
  likeIcon?: JSX.Element;
  isLiked?: boolean;
  imageDate?: number;
  setAvatarAction?: React.MouseEventHandler<Element>;
  selectMode?: boolean;
  selected?: boolean;
  setSelected?: (selected: boolean) => void;
  deleteHandler?: React.MouseEventHandler;
  likeHandler?: React.MouseEventHandler;
}
