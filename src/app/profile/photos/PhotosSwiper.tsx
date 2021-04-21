import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Styled } from '../styled';
import 'swiper/swiper-bundle.css';
import { PhotosProps } from '../interfaces';

export const PhotosSwiper = ({ photos }: PhotosProps) => {
  return (
    <Swiper spaceBetween={2} slidesPerView={'auto'}>
      {photos.map((photo, i) => (
        <SwiperSlide key={i}>
          <Styled.Photo {...photo} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
