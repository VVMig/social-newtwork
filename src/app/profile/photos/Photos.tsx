import React, { useState } from 'react';
import { AllPhotoModal } from './AllPhotoModal';
import { PhotosSwiper } from './PhotosSwiper';
import 'swiper/swiper-bundle.css';
import { ListSection } from '../ListSection';
import { store } from '../../store';
import { Icon } from '../../Icon';
import { IconType } from '../../IconEnum';
import { ImageProps } from '../../../packages/components';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { Params } from '../interfaces';
import { updateAvatar } from '../../helpers';

export const Photos = observer(() => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const { id } = useParams<Params>();

  const allPhotosHandler: React.MouseEventHandler = () => {
    setShowAllPhotos(true);
  };

  const likeIcon = (): ImageProps[] => {
    return store.profile.profilePhotos.map((photo) => ({
      ...photo,
      likeIcon: <Icon type={IconType.Like} />,
    }));
  };

  const avatarHandler: React.MouseEventHandler = async function (
    this: ImageProps
  ) {
    const result = /(?!.*\/).*(?=\.)/.exec(`${this.src}`);

    if (!result) return;

    try {
      await updateAvatar(result[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ListSection allClickHandler={allPhotosHandler}>
        <PhotosSwiper
          photos={likeIcon()}
          avatarHandler={id === store.user._id ? avatarHandler : undefined}
        />
      </ListSection>
      {store.profile.profilePhotos.length > 0 && (
        <AllPhotoModal
          setShowModal={setShowAllPhotos}
          showModal={showAllPhotos}
          photos={likeIcon()}
          avatarHandler={id === store.user._id ? avatarHandler : undefined}
        />
      )}
    </>
  );
});
