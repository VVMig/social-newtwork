import React, { useState } from 'react';
import { AllPhotoModal } from './AllPhotoModal';
import { PhotosSwiper } from './PhotosSwiper';
import 'swiper/swiper-bundle.css';
import { PhotosProps } from '../interfaces';
import { ListSection } from '../ListSection';

export const Photos = ({ photos }: PhotosProps) => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const allPhotosHandler: React.MouseEventHandler = () => {
    setShowAllPhotos(true);
  };

  return (
    <>
      <ListSection allClickHandler={allPhotosHandler}>
        <PhotosSwiper photos={photos} />
      </ListSection>
      <AllPhotoModal
        setShowModal={setShowAllPhotos}
        showModal={showAllPhotos}
        photos={photos}
      />
    </>
  );
};
