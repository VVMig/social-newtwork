import React from 'react';
import { Modal, ModalProps } from '../modal';
import { Styled } from './styled';
import { Likes } from '../likes';
import moment from 'moment';

interface Props extends ModalProps {
  likesNumber?: number;
  src: string;
  alt?: string;
  likeIcon?: JSX.Element;
  isLiked?: boolean;
  imageDate?: number;
}

export const ImageModal = ({
  likesNumber,
  src,
  alt,
  likeIcon,
  isLiked,
  imageDate,
  ...props
}: Props) => {
  const realTime = () => {
    return moment(imageDate).fromNow() === 'a few seconds ago'
      ? 'recently'
      : moment(imageDate).fromNow();
  };

  return (
    <>
      <Modal {...props}>
        <Styled.Image src={src} alt={alt} />
        <Styled.InfoContainer>
          {imageDate && <Styled.Date>{realTime()}</Styled.Date>}
          {likesNumber !== undefined && likeIcon && (
            <Likes
              likesNumber={likesNumber}
              icon={likeIcon}
              isLiked={isLiked}
            />
          )}
        </Styled.InfoContainer>
      </Modal>
    </>
  );
};
