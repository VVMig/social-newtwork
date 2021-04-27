import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { FriendsProps } from '../interfaces';
import { Friend } from './Friend';

export const FriendsSwiper = ({ friends }: FriendsProps) => {
  return (
    <Swiper spaceBetween={7} slidesPerView={'auto'}>
      {friends.length ? (
        friends.map((friend, i) => (
          <SwiperSlide key={i}>
            <Friend {...friend} />
          </SwiperSlide>
        ))
      ) : (
        <SwiperSlide>No friends yet</SwiperSlide>
      )}
    </Swiper>
  );
};
