import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { FriendsProps } from '../interfaces';
import { Follower } from './Follower';

export const FollowersSwiper = ({ followers }: FriendsProps) => {
  return (
    <Swiper spaceBetween={7} slidesPerView={'auto'}>
      {followers.length ? (
        followers.map((follower, i) => (
          <SwiperSlide key={i}>
            <Follower {...follower} />
          </SwiperSlide>
        ))
      ) : (
        <SwiperSlide>No followers yet</SwiperSlide>
      )}
    </Swiper>
  );
};
