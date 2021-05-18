import React from 'react';

import { ModalProps } from '../modal';

export interface DefaultImageProps {
  className?: string;
  src: string;
  alt?: string;
}

export interface ImageInfoProps {
  likesNumber?: number;
  likeIcon?: JSX.Element;
  isLiked?: boolean;
  imageDate?: number;
  likeHandler?: React.MouseEventHandler;
}

export interface ImageActionsProps {
  setAvatarAction?: React.MouseEventHandler;
  deleteHandler?: React.MouseEventHandler;
}

export interface ImageModalProps
  extends ImageInfoProps,
    DefaultImageProps,
    ImageActionsProps,
    ModalProps {}

export interface ImageProps
  extends DefaultImageProps,
    ImageInfoProps,
    ImageActionsProps {
  actionHandler?: React.MouseEventHandler<Element>;
  isModal?: boolean;
  isSelectMode?: boolean;
  isSelected?: boolean;
  setSelected?: (selected: boolean) => void;
}

export interface PreviewProps extends DefaultImageProps {
  isSelected?: boolean;
  isModal?: boolean;
}
