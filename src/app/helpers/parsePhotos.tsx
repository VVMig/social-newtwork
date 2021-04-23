import { ImageProps } from '../../packages/components';
import { IPhoto } from '../profile/interfaces';
import { imageUrl } from '../url';
import { Icon } from '../Icon';
import { IconType } from '../IconEnum';

export const parsePhotos = (photos: IPhoto[]): ImageProps[] => {
  return photos
    .map((photo) => ({
      src: `${imageUrl}/${photo._id}.${photo.ext}`,
      isModal: true,
      likeIcon: <Icon type={IconType.Like} />,
      likesNumber: photo.likes.length,
      imageDate: new Date(photo.date)
        .toLocaleString([], { hour12: false })
        .replaceAll('/', '.'),
    }))
    .reverse();
};
