import 'swiper/swiper-bundle.css';

import React, { useState } from 'react';

import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';

import { ImageProps } from '../../../packages/components';
import {
  deletePhotosRequest,
  isLiked,
  likeToggle,
  parseError,
  updateAvatar,
} from '../../helpers';
import { Icon } from '../../Icon';
import { IconType } from '../../IconEnum';
import { store } from '../../store';
import { Params } from '../interfaces';
import { ListSection } from '../ListSection';
import { AllPhotoModal } from './AllPhotoModal';
import { PhotosSwiper } from './PhotosSwiper';

const photosNames = (photos: ImageProps[]): string[] => {
  return photos.map((photo) => `${/(?!.*\/).*/.exec(photo.src)?.shift()}`);
};

export const Photos = observer(() => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const { id } = useParams<Params>();

  const allPhotosHandler: React.MouseEventHandler = () => {
    setShowAllPhotos(true);
  };

  async function toggleLikeHandler(this: ImageProps) {
    try {
      await likeToggle(`${/(?!.*\/).*/.exec(this.src)?.shift()}`);
    } catch (error) {
      store.setError(parseError(error));
    }
  }

  const likeIcon = (): ImageProps[] => {
    return store.profile.profilePhotos.map((photo) => ({
      ...photo,
      isLiked: isLiked(store.user._id, photo.src),
      likeIcon: <Icon type={IconType.Like} />,
      likeHandler: toggleLikeHandler.bind(photo),
    }));
  };

  const deletePhotos = async (photos: ImageProps[] | string) => {
    try {
      if (Array.isArray(photos)) await deletePhotosRequest(photosNames(photos));
      else deletePhotosRequest([photos]);
    } catch (error) {
      store.setError(parseError(error));
    }
  };

  const avatarHandler: React.MouseEventHandler = async function (
    this: ImageProps
  ) {
    const result = /(?!.*\/).*(?=\.)/.exec(`${this.src}`);

    if (!result) return;

    try {
      await updateAvatar(result[0]);
    } catch (error) {
      store.setError(parseError(error));
    }
  };

  return (
    <>
      <ListSection allClickHandler={allPhotosHandler}>
        <PhotosSwiper
          photos={likeIcon()}
          avatarHandler={id === store.user._id ? avatarHandler : undefined}
          deletePhoto={deletePhotos}
        />
      </ListSection>
      {store.profile.profilePhotos.length > 0 && (
        <AllPhotoModal
          deletePhotos={id === store.user._id ? deletePhotos : undefined}
          setShowModal={setShowAllPhotos}
          showModal={showAllPhotos}
          photos={likeIcon()}
          avatarHandler={id === store.user._id ? avatarHandler : undefined}
        />
      )}
    </>
  );
});
