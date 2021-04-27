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

export const Photos = observer(() => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const allPhotosHandler: React.MouseEventHandler = () => {
    setShowAllPhotos(true);
  };

  const likeIcon = (): ImageProps[] => {
    return store.profile.profilePhotos.map((photo) => ({
      ...photo,
      likeIcon: <Icon type={IconType.Like} />,
    }));
  };

  return (
    <>
      <ListSection allClickHandler={allPhotosHandler}>
        <PhotosSwiper photos={likeIcon()} />
      </ListSection>
      {store.profile.profilePhotos.length > 0 && (
        <AllPhotoModal
          setShowModal={setShowAllPhotos}
          showModal={showAllPhotos}
          photos={likeIcon()}
        />
      )}
    </>
  );
});
