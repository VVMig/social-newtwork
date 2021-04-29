import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Styled } from '../styled';
import 'swiper/swiper-bundle.css';
import { PhotosProps } from '../interfaces';

interface Props extends PhotosProps {
  avatarHandler?: React.MouseEventHandler<Element>;
}

export const PhotosSwiper = ({ photos, avatarHandler }: Props) => {
  return (
    <Swiper spaceBetween={2} slidesPerView={'auto'}>
      {photos.length ? (
        photos.map((photo, i) => (
          <SwiperSlide key={i}>
            <Styled.Photo
              {...photo}
              setAvatarAction={avatarHandler?.bind(photo)}
            />
          </SwiperSlide>
        ))
      ) : (
        <SwiperSlide>No photos yet</SwiperSlide>
      )}
    </Swiper>
  );
};
