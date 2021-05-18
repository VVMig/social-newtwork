import React from 'react';

import { Likes } from '../../likes';
import { lastTimeAction } from '../../utils';
import { ImageInfoProps } from '../interfaces';
import { Styled } from '../styled';

export const ImageInfo: React.FC<ImageInfoProps> = ({
  likeHandler,
  likeIcon,
  likesNumber,
  imageDate,
  isLiked,
}) => {
  return (
    <Styled.InfoContainer>
      <Styled.Date>{lastTimeAction(imageDate)}</Styled.Date>
      <Likes
        actionHandler={likeHandler}
        likesNumber={likesNumber || 0}
        icon={likeIcon}
        isLiked={isLiked}
      />
    </Styled.InfoContainer>
  );
};
