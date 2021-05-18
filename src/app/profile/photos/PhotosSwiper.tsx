import 'swiper/swiper-bundle.css';

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { ImageProps } from '../../../packages/components';
import { PhotosProps } from '../interfaces';
import { Styled } from '../styled';

interface Props extends PhotosProps {
  avatarHandler?: React.MouseEventHandler<Element>;
  deletePhoto: (photo: ImageProps[] | string) => Promise<void>;
}

export const PhotosSwiper = ({ photos, avatarHandler, deletePhoto }: Props) => {
  async function deleteHandler(this: ImageProps) {
    deletePhoto(`${/(?!.*\/).*/.exec(this.src)?.shift()}`);
  }

  return (
    <Swiper spaceBetween={2} slidesPerView={'auto'}>
      {photos.length ? (
        photos.map((photo, i) => (
          <SwiperSlide key={i}>
            <Styled.Photo
              {...photo}
              setAvatarAction={avatarHandler?.bind(photo)}
              deleteHandler={deleteHandler.bind(photo)}
            />
          </SwiperSlide>
        ))
      ) : (
        <SwiperSlide>No photos yet</SwiperSlide>
      )}
    </Swiper>
  );
};
