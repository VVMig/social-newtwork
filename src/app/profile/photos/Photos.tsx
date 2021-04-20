import React, { useState } from 'react';
import { Styled } from '../styled';
import { AllPhotoModal } from './AllPhotoModal';
import { PhotosSwiper } from './PhotosSwiper';
import 'swiper/swiper-bundle.css';
import { PhotosProps } from './interfacers';

export const Photos = ({ photos }: PhotosProps) => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const allPhotosHandler: React.MouseEventHandler = () => {
    setShowAllPhotos(true);
  };

  return (
    <>
      <Styled.PhotosWrapper>
        <Styled.Photos>
          <Styled.AllPhotos>
            <Styled.AllPhotosButton onClick={allPhotosHandler}>
              View all
            </Styled.AllPhotosButton>
          </Styled.AllPhotos>
          <PhotosSwiper photos={photos} />
        </Styled.Photos>
      </Styled.PhotosWrapper>
      <AllPhotoModal
        setShowModal={setShowAllPhotos}
        showModal={showAllPhotos}
        photos={photos}
      />
    </>
  );
};
